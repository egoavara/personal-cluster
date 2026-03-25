import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { zitadel } from "./zitadel.ts";

const namespace = ns.metadata.name;
const config = new pulumi.Config("cluster");
const googleOAuth = {
    clientId: config.requireSecret("auth.google.clientId"),
    clientSecret: config.requireSecret("auth.google.clientSecret"),
};

// --- RBAC ---
const sa = new k8s.core.v1.ServiceAccount("zitadel-clients-sa", {
    metadata: { name: "zitadel-clients", namespace },
}, { parent: authPhase });

// auth NS — Secret 관리 권한
const role = new k8s.rbac.v1.Role("zitadel-clients-role", {
    metadata: { name: "zitadel-clients", namespace },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        verbs: ["get", "create", "update", "patch"],
    }],
}, { parent: authPhase });

const roleBinding = new k8s.rbac.v1.RoleBinding("zitadel-clients-rb", {
    metadata: { name: "zitadel-clients", namespace },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "zitadel-clients" },
    subjects: [{ kind: "ServiceAccount", name: "zitadel-clients", namespace }],
}, { parent: authPhase });

// flux-system NS — Weave GitOps OIDC Secret 생성
const fluxRole = new k8s.rbac.v1.Role("zitadel-clients-flux-role", {
    metadata: { name: "zitadel-clients", namespace: "flux-system" },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        verbs: ["get", "create", "update", "patch"],
    }],
}, { parent: authPhase });

const fluxRoleBinding = new k8s.rbac.v1.RoleBinding("zitadel-clients-flux-rb", {
    metadata: { name: "zitadel-clients", namespace: "flux-system" },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "zitadel-clients" },
    subjects: [{ kind: "ServiceAccount", name: "zitadel-clients", namespace: "auth" }],
}, { parent: authPhase });

// telemetry NS — Grafana OIDC Secret 생성 + Deployment restart 권한
const telemetryRole = new k8s.rbac.v1.Role("zitadel-clients-telemetry-role", {
    metadata: { name: "zitadel-clients", namespace: "telemetry" },
    rules: [
        {
            apiGroups: [""],
            resources: ["secrets"],
            verbs: ["get", "create", "update", "patch"],
        },
        {
            apiGroups: ["apps"],
            resources: ["deployments"],
            verbs: ["get", "patch"],
        },
    ],
}, { parent: authPhase });

const telemetryRoleBinding = new k8s.rbac.v1.RoleBinding("zitadel-clients-telemetry-rb", {
    metadata: { name: "zitadel-clients", namespace: "telemetry" },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "zitadel-clients" },
    subjects: [{ kind: "ServiceAccount", name: "zitadel-clients", namespace: "auth" }],
}, { parent: authPhase });

// --- Google OAuth Secret ---
const googleOAuthSecret = new k8s.core.v1.Secret("google-oauth", {
    metadata: { name: "google-oauth", namespace },
    stringData: {
        "client-id": googleOAuth.clientId,
        "client-secret": googleOAuth.clientSecret,
    },
}, { parent: authPhase });

// --- Script ---
// Idempotent: 기존 앱+Secret이 있으면 재사용, 없을 때만 생성
const script = new k8s.core.v1.ConfigMap("zitadel-clients-script", {
    metadata: { name: "zitadel-clients-script", namespace },
    data: {
        "register.sh": `#!/bin/sh
set -e
PAT=$(echo "$PAT" | tr -d '\\n\\r ')
API="http://zitadel.auth.svc.cluster.local:8080"
H_AUTH="Authorization: Bearer $PAT"
H_HOST="Host: auth.egoavara.net"
H_CT="Content-Type: application/json"
NS="auth"

echo "=== Ensuring project ==="
PROJECT=$(curl -sf -X POST "$API/management/v1/projects/_search" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
    -d '{"queries":[{"nameQuery":{"name":"Infrastructure","method":"TEXT_QUERY_METHOD_EQUALS"}}]}')
PROJECT_ID=$(echo "$PROJECT" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$PROJECT_ID" ]; then
    PROJECT=$(curl -sf -X POST "$API/management/v1/projects" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d '{"name":"Infrastructure"}')
    PROJECT_ID=$(echo "$PROJECT" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
fi
echo "Project ID: $PROJECT_ID"

# ensure_app: idempotent client registration
# - If K8s Secret exists with client-id/client-secret → skip (already registered)
# - If Zitadel app exists but no Secret → regenerate secret, create Secret
# - If neither exists → create app + Secret
ensure_app() {
    local APP_NAME="$1"
    local REDIRECT_URIS="$2"
    local POST_LOGOUT_URIS="$3"
    local SECRET_NAME="$4"
    shift 4

    echo "=== Ensuring $APP_NAME ==="

    # Check if Secret already exists with both keys
    EXISTING_CID=$(kubectl get secret "$SECRET_NAME" -n "$NS" -o jsonpath='{.data.client-id}' 2>/dev/null | base64 -d 2>/dev/null || true)
    EXISTING_CS=$(kubectl get secret "$SECRET_NAME" -n "$NS" -o jsonpath='{.data.client-secret}' 2>/dev/null | base64 -d 2>/dev/null || true)

    if [ -n "$EXISTING_CID" ] && [ -n "$EXISTING_CS" ]; then
        echo "$APP_NAME: Secret/$SECRET_NAME already exists (clientId=$EXISTING_CID), skipping"
        # Still replicate to extra namespaces
        for extra_ns in "$@"; do
            kubectl create secret generic "$SECRET_NAME" -n "$extra_ns" \\
                --from-literal=client-id="$EXISTING_CID" \\
                --from-literal=client-secret="$EXISTING_CS" \\
                --dry-run=client -o yaml | kubectl apply -f -
        done
        return 0
    fi

    # Check if app already exists in Zitadel
    APPS=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/_search" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d "{\\"queries\\":[{\\"nameQuery\\":{\\"name\\":\\"$APP_NAME\\",\\"method\\":\\"TEXT_QUERY_METHOD_EQUALS\\"}}]}")
    APP_ID=$(echo "$APPS" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    CLIENT_ID=$(echo "$APPS" | grep -o '"clientId":"[^"]*"' | head -1 | cut -d'"' -f4)

    if [ -n "$APP_ID" ] && [ -n "$CLIENT_ID" ]; then
        # App exists but no Secret — regenerate client secret
        echo "$APP_NAME exists (appId=$APP_ID), regenerating secret..."
        REGEN=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/$APP_ID/oidc_config/_generate_client_secret" \\
            -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" -d '{}')
        CLIENT_SECRET=$(echo "$REGEN" | grep -o '"clientSecret":"[^"]*"' | cut -d'"' -f4)
    else
        # App does not exist — create it
        echo "Creating $APP_NAME..."
        RESULT=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/oidc" \\
            -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
            -d "{
                \\"name\\": \\"$APP_NAME\\",
                \\"redirectUris\\": [$REDIRECT_URIS],
                \\"postLogoutRedirectUris\\": [$POST_LOGOUT_URIS],
                \\"responseTypes\\": [\\"OIDC_RESPONSE_TYPE_CODE\\"],
                \\"grantTypes\\": [\\"OIDC_GRANT_TYPE_AUTHORIZATION_CODE\\"],
                \\"appType\\": \\"OIDC_APP_TYPE_WEB\\",
                \\"authMethodType\\": \\"OIDC_AUTH_METHOD_TYPE_POST\\",
                \\"devMode\\": true
            }")
        CLIENT_ID=$(echo "$RESULT" | grep -o '"clientId":"[^"]*"' | cut -d'"' -f4)
        CLIENT_SECRET=$(echo "$RESULT" | grep -o '"clientSecret":"[^"]*"' | cut -d'"' -f4)
    fi

    if [ -z "$CLIENT_ID" ] || [ -z "$CLIENT_SECRET" ]; then
        echo "ERROR: Failed to ensure $APP_NAME"
        return 1
    fi

    echo "$APP_NAME: clientId=$CLIENT_ID"

    # Create/update Secret in primary namespace
    kubectl create secret generic "$SECRET_NAME" -n "$NS" \\
        --from-literal=client-id="$CLIENT_ID" \\
        --from-literal=client-secret="$CLIENT_SECRET" \\
        --dry-run=client -o yaml | kubectl apply -f -

    # Replicate to extra namespaces
    for extra_ns in "$@"; do
        kubectl create secret generic "$SECRET_NAME" -n "$extra_ns" \\
            --from-literal=client-id="$CLIENT_ID" \\
            --from-literal=client-secret="$CLIENT_SECRET" \\
            --dry-run=client -o yaml | kubectl apply -f -
        echo "$APP_NAME => Secret/$SECRET_NAME in $extra_ns"
    done

    echo "$APP_NAME => Secret/$SECRET_NAME"
}

OAUTH2_URIS='"https://ceph.private.egoavara.net/oauth2/callback","https://hubble.private.egoavara.net/oauth2/callback"'
ensure_app "oauth2-proxy" "$OAUTH2_URIS" "" "oidc-oauth2-proxy"

GRAFANA_URIS='"https://grafana.private.egoavara.net/login/generic_oauth"'
ensure_app "grafana" "$GRAFANA_URIS" "" "oidc-grafana" "telemetry"

GUARD_URIS='"https://guard.private.egoavara.net/callback","http://localhost:4180/callback","http://localhost:8080/callback"'
GUARD_LOGOUT_URIS='"https://guard.private.egoavara.net/signed_out"'
ensure_app "kube-authz" "$GUARD_URIS" "$GUARD_LOGOUT_URIS" "oidc-kube-authz"

WEAVE_URIS='"https://gitops.private.egoavara.net/oauth2/callback"'
WEAVE_LOGOUT_URIS='"https://gitops.private.egoavara.net"'
ensure_app "weave-gitops" "$WEAVE_URIS" "$WEAVE_LOGOUT_URIS" "oidc-weave-gitops" "flux-system"

# --- Google IdP ---
echo "=== Ensuring Google IdP ==="

# Check login policy first — most reliable source of existing IdPs
LOGIN_IDPS=$(curl -s -X POST "$API/admin/v1/policies/login/idps/_search" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" -d '{}')
GOOGLE_IDP_ID=""
if echo "$LOGIN_IDPS" | grep -q '"idpName":"Google"'; then
    GOOGLE_IDP_ID=$(echo "$LOGIN_IDPS" | sed 's/},/}\\n/g' | grep '"idpName":"Google"' | grep -o '"idpId":"[^"]*"' | head -1 | cut -d'"' -f4 || true)
fi

if [ -n "$GOOGLE_IDP_ID" ]; then
    echo "Google IdP already in login policy (id=$GOOGLE_IDP_ID), updating..."
    curl -s -X PUT "$API/admin/v1/idps/$GOOGLE_IDP_ID/google" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d "{
            \\"name\\": \\"Google\\",
            \\"clientId\\": \\"$GOOGLE_CLIENT_ID\\",
            \\"clientSecret\\": \\"$GOOGLE_CLIENT_SECRET\\",
            \\"scopes\\": [\\"openid\\", \\"email\\", \\"profile\\"],
            \\"providerOptions\\": {
                \\"isLinkingAllowed\\": true,
                \\"isCreationAllowed\\": true,
                \\"isAutoCreation\\": true,
                \\"isAutoUpdate\\": true
            }
        }" > /dev/null
    echo "Google IdP updated"
else
    echo "Creating Google IdP..."
    RESULT=$(curl -s -X POST "$API/admin/v1/idps/google" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d "{
            \\"name\\": \\"Google\\",
            \\"clientId\\": \\"$GOOGLE_CLIENT_ID\\",
            \\"clientSecret\\": \\"$GOOGLE_CLIENT_SECRET\\",
            \\"scopes\\": [\\"openid\\", \\"email\\", \\"profile\\"],
            \\"providerOptions\\": {
                \\"isLinkingAllowed\\": true,
                \\"isCreationAllowed\\": true,
                \\"isAutoCreation\\": true,
                \\"isAutoUpdate\\": true
            }
        }")
    GOOGLE_IDP_ID=$(echo "$RESULT" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4 || true)
    echo "Google IdP created (id=$GOOGLE_IDP_ID)"

    # Add to login policy only on first creation
    if [ -n "$GOOGLE_IDP_ID" ]; then
        curl -s -X POST "$API/admin/v1/policies/login/idps" \\
            -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
            -d "{\\"idpId\\":\\"$GOOGLE_IDP_ID\\",\\"ownerType\\":\\"IDP_OWNER_TYPE_SYSTEM\\"}"
        echo "Google IdP added to login policy"
    fi
fi

echo "=== ALL CLIENTS & IdPs ENSURED ==="
`,
    },
}, { parent: authPhase });

// --- Job ---
// ConfigMap 변경 시 Job이 자동 교체되도록 annotation에 resourceVersion을 주입
export const zitadelClients = new k8s.batch.v1.Job("zitadel-clients", {
    metadata: {
        name: "zitadel-clients",
        namespace,
        annotations: {
            "kube-authz/script-version": script.metadata.resourceVersion,
        },
    },
    spec: {
        backoffLimit: 10,
        template: {
            spec: {
                serviceAccountName: "zitadel-clients",
                restartPolicy: "OnFailure",
                volumes: [
                    { name: "script", configMap: { name: "zitadel-clients-script", defaultMode: 0o755 } },
                ],
                initContainers: [{
                    name: "wait-zitadel",
                    image: "curlimages/curl:latest",
                    command: ["sh", "-c",
                        "until curl -sf http://zitadel.auth.svc.cluster.local:8080/debug/ready -H 'Host: auth.egoavara.net'; do sleep 3; done",
                    ],
                }],
                containers: [{
                    name: "register",
                    image: "alpine/k8s:1.32.4",
                    env: [
                        {
                            name: "PAT",
                            valueFrom: { secretKeyRef: { name: "iam-admin-pat", key: "pat" } },
                        },
                        {
                            name: "GOOGLE_CLIENT_ID",
                            valueFrom: { secretKeyRef: { name: "google-oauth", key: "client-id" } },
                        },
                        {
                            name: "GOOGLE_CLIENT_SECRET",
                            valueFrom: { secretKeyRef: { name: "google-oauth", key: "client-secret" } },
                        },
                    ],
                    command: ["sh", "/scripts/register.sh"],
                    volumeMounts: [{
                        name: "script",
                        mountPath: "/scripts",
                    }],
                }],
            },
        },
    },
}, {
    parent: authPhase,
    dependsOn: [zitadel, script, sa, role, roleBinding, telemetryRole, telemetryRoleBinding, fluxRole, fluxRoleBinding, googleOAuthSecret],
    replaceOnChanges: ["metadata.annotations"],
});
