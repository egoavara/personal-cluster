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

// persistence NS — vender-auth-secrets (SpiceDB key, Zitadel PAT, project ID) 생성 권한
const persistenceRole = new k8s.rbac.v1.Role("zitadel-clients-persistence-role", {
    metadata: { name: "zitadel-clients", namespace: "persistence" },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        verbs: ["get", "create", "update", "patch"],
    }],
}, { parent: authPhase });

const persistenceRoleBinding = new k8s.rbac.v1.RoleBinding("zitadel-clients-persistence-rb", {
    metadata: { name: "zitadel-clients", namespace: "persistence" },
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

# Enable projectRoleAssertion — Action의 ctx.v1.grants에 role 정보 제공에 필요
echo "=== Enabling project role assertion ==="
curl -s -X PUT "$API/management/v1/projects/$PROJECT_ID" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
    -d "{\\"name\\":\\"Infrastructure\\",\\"projectRoleAssertion\\":true,\\"projectRoleCheck\\":true}" > /dev/null
echo "Project role assertion enabled"

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

# --- Zitadel Action: flatten project roles → groups claim ---
# 모든 OIDC 클라이언트의 토큰에 project roles를 flat groups claim으로 주입
echo "=== Ensuring groups claim Action ==="

# JS에서 작은따옴표 사용 → JSON 이스케이핑 불필요
ACTION_SCRIPT="function flattenRolesToGroups(ctx, api) { if (!ctx.v1.grants || !ctx.v1.grants.userGrants) return; var groups = []; ctx.v1.grants.userGrants.forEach(function(grant) { grant.roles.forEach(function(role) { if (groups.indexOf(role) === -1) groups.push(role); }); }); if (groups.length > 0) { api.v1.claims.setClaim('groups', groups); } }"
ACTION_JSON="{\\"name\\":\\"flattenRolesToGroups\\",\\"script\\":\\"$ACTION_SCRIPT\\",\\"timeout\\":\\"10s\\",\\"allowedToFail\\":false}"

ACTIONS=$(curl -s -X POST "$API/management/v1/actions/_search" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
    -d '{"queries":[{"actionNameQuery":{"name":"flattenRolesToGroups","method":"TEXT_QUERY_METHOD_EQUALS"}}]}')
echo "Actions search response: $ACTIONS"
ACTION_ID=$(echo "$ACTIONS" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4 || true)

if [ -n "$ACTION_ID" ]; then
    echo "Action flattenRolesToGroups exists (id=$ACTION_ID), updating..."
    curl -s -X PUT "$API/management/v1/actions/$ACTION_ID" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d "$ACTION_JSON"
else
    echo "Creating Action flattenRolesToGroups..."
    RESULT=$(curl -s -X POST "$API/management/v1/actions" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d "$ACTION_JSON")
    echo "Create action response: $RESULT"
    ACTION_ID=$(echo "$RESULT" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo "Action created (id=$ACTION_ID)"
fi

if [ -n "$ACTION_ID" ]; then
    # Complement Token flow (type=2): trigger 4 = Pre Access Token, trigger 5 = Pre Userinfo
    # trigger 4 = Pre Userinfo, trigger 5 = Pre Access Token
    for TRIGGER in 4 5; do
        FLOW_RESULT=$(curl -s -X POST "$API/management/v1/flows/2/trigger/$TRIGGER" \\
            -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
            -d "{\\"actionIds\\":[\\"$ACTION_ID\\"]}")
        echo "Trigger $TRIGGER response: $FLOW_RESULT"
    done
fi

# --- Vender cross-phase secrets ---
# persistence NS에 SpiceDB key, Zitadel PAT, project ID를 복제
echo "=== Creating vender-auth-secrets in persistence NS ==="
SPICEDB_KEY=$(kubectl get secret spicedb-preshared-key -n auth -o jsonpath='{.data.SPICEDB_GRPC_PRESHARED_KEY}' | base64 -d)
kubectl create secret generic vender-auth-secrets -n persistence \\
    --from-literal=spicedb-preshared-key="$SPICEDB_KEY" \\
    --from-literal=zitadel-pat="$PAT" \\
    --from-literal=zitadel-project-id="$PROJECT_ID" \\
    --dry-run=client -o yaml | kubectl apply -f -
echo "vender-auth-secrets created in persistence NS"

echo "=== ALL CLIENTS, IdPs & ACTIONS ENSURED ==="
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
    dependsOn: [zitadel, script, sa, role, roleBinding, telemetryRole, telemetryRoleBinding, persistenceRole, persistenceRoleBinding, googleOAuthSecret],
    replaceOnChanges: ["metadata.annotations"],
});
