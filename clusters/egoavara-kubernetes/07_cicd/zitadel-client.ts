import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { weaveGitops } from "./weave-gitops.ts";

const namespace = ns.metadata.name;

// --- RBAC: flux-system NS에서 Secret 관리 ---
const sa = new k8s.core.v1.ServiceAccount("weave-oidc-sa", {
    metadata: { name: "weave-oidc-register", namespace },
}, { parent: cicdPhase });

// flux-system NS — Secret 생성 + Deployment restart 권한
const role = new k8s.rbac.v1.Role("weave-oidc-role", {
    metadata: { name: "weave-oidc-register", namespace },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        verbs: ["get", "create", "update", "patch"],
    }, {
        apiGroups: ["apps"],
        resources: ["deployments"],
        verbs: ["get", "patch"],
    }],
}, { parent: cicdPhase });

const roleBinding = new k8s.rbac.v1.RoleBinding("weave-oidc-rb", {
    metadata: { name: "weave-oidc-register", namespace },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "weave-oidc-register" },
    subjects: [{ kind: "ServiceAccount", name: "weave-oidc-register", namespace }],
}, { parent: cicdPhase });

// auth NS — iam-admin-pat Secret 읽기 권한
const authRole = new k8s.rbac.v1.Role("weave-oidc-auth-role", {
    metadata: { name: "weave-oidc-register", namespace: "auth" },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        resourceNames: ["iam-admin-pat"],
        verbs: ["get"],
    }],
}, { parent: cicdPhase });

const authRoleBinding = new k8s.rbac.v1.RoleBinding("weave-oidc-auth-rb", {
    metadata: { name: "weave-oidc-register", namespace: "auth" },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "weave-oidc-register" },
    subjects: [{ kind: "ServiceAccount", name: "weave-oidc-register", namespace }],
}, { parent: cicdPhase });

// --- Script ---
const script = new k8s.core.v1.ConfigMap("weave-oidc-script", {
    metadata: { name: "weave-oidc-script", namespace },
    data: {
        "register.sh": `#!/bin/sh
set -e
PAT=$(echo "$PAT" | tr -d '\\n\\r ')
API="http://zitadel.auth.svc.cluster.local:8080"
H_AUTH="Authorization: Bearer $PAT"
H_HOST="Host: auth.egoavara.net"
H_CT="Content-Type: application/json"
NS="flux-system"

echo "=== Ensuring project ==="
PROJECT=$(curl -sf -X POST "$API/management/v1/projects/_search" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
    -d '{"queries":[{"nameQuery":{"name":"Infrastructure","method":"TEXT_QUERY_METHOD_EQUALS"}}]}')
PROJECT_ID=$(echo "$PROJECT" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$PROJECT_ID" ]; then
    echo "ERROR: Infrastructure project not found. Run 04_auth first."
    exit 1
fi
echo "Project ID: $PROJECT_ID"

# Check existing Secret
EXISTING_CID=$(kubectl get secret "oidc-auth" -n "$NS" -o jsonpath='{.data.clientID}' 2>/dev/null | base64 -d 2>/dev/null || true)
EXISTING_CS=$(kubectl get secret "oidc-auth" -n "$NS" -o jsonpath='{.data.clientSecret}' 2>/dev/null | base64 -d 2>/dev/null || true)

if [ -n "$EXISTING_CID" ] && [ -n "$EXISTING_CS" ]; then
    echo "oidc-auth Secret already exists (clientId=$EXISTING_CID), skipping"
    exit 0
fi

# Check if app exists in Zitadel
APP_NAME="weave-gitops"
SEARCH_BODY='{"queries":[{"nameQuery":{"name":"'"$APP_NAME"'","method":"TEXT_QUERY_METHOD_EQUALS"}}]}'
APPS=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/_search" \\
    -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
    -d "$SEARCH_BODY")
APP_ID=$(echo "$APPS" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
CLIENT_ID=$(echo "$APPS" | grep -o '"clientId":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$APP_ID" ] && [ -n "$CLIENT_ID" ]; then
    echo "$APP_NAME exists (appId=$APP_ID), regenerating secret..."
    REGEN=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/$APP_ID/oidc_config/_generate_client_secret" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" -d '{}')
    CLIENT_SECRET=$(echo "$REGEN" | grep -o '"clientSecret":"[^"]*"' | cut -d'"' -f4)
else
    echo "Creating $APP_NAME..."
    RESULT=$(curl -sf -X POST "$API/management/v1/projects/$PROJECT_ID/apps/oidc" \\
        -H "$H_AUTH" -H "$H_CT" -H "$H_HOST" \\
        -d '{
            "name": "weave-gitops",
            "redirectUris": ["https://gitops.private.egoavara.net/oauth2/callback"],
            "postLogoutRedirectUris": ["https://gitops.private.egoavara.net"],
            "responseTypes": ["OIDC_RESPONSE_TYPE_CODE"],
            "grantTypes": ["OIDC_GRANT_TYPE_AUTHORIZATION_CODE"],
            "appType": "OIDC_APP_TYPE_WEB",
            "authMethodType": "OIDC_AUTH_METHOD_TYPE_POST",
            "devMode": true
        }')
    CLIENT_ID=$(echo "$RESULT" | grep -o '"clientId":"[^"]*"' | cut -d'"' -f4)
    CLIENT_SECRET=$(echo "$RESULT" | grep -o '"clientSecret":"[^"]*"' | cut -d'"' -f4)
fi

if [ -z "$CLIENT_ID" ] || [ -z "$CLIENT_SECRET" ]; then
    echo "ERROR: Failed to get client credentials"
    exit 1
fi

echo "Creating oidc-auth Secret (clientId=$CLIENT_ID)..."
kubectl create secret generic oidc-auth -n "$NS" \\
    --from-literal=issuerURL="https://auth.egoavara.net" \\
    --from-literal=redirectURL="https://gitops.private.egoavara.net/oauth2/callback" \\
    --from-literal=clientID="$CLIENT_ID" \\
    --from-literal=clientSecret="$CLIENT_SECRET" \\
    --from-literal=claimUsername="preferred_username" \\
    --from-literal=customScopes="openid,offline_access,email,groups" \\
    --dry-run=client -o yaml | kubectl apply -f -

echo "Restarting weave-gitops to pick up OIDC..."
kubectl rollout restart deployment/weave-gitops -n "$NS"

echo "=== DONE ==="
`,
    },
}, { parent: cicdPhase });

// --- Job ---
export const zitadelClient = new k8s.batch.v1.Job("weave-oidc-register", {
    metadata: {
        name: "weave-oidc-register",
        namespace,
        annotations: {
            "cicd/script-version": script.metadata.resourceVersion,
        },
    },
    spec: {
        backoffLimit: 10,
        template: {
            spec: {
                serviceAccountName: "weave-oidc-register",
                restartPolicy: "OnFailure",
                volumes: [
                    { name: "script", configMap: { name: "weave-oidc-script", defaultMode: 0o755 } },
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
                    command: ["sh", "-c", "export PAT=$(kubectl get secret iam-admin-pat -n auth -o jsonpath='{.data.pat}' | base64 -d) && sh /scripts/register.sh"],
                    volumeMounts: [{
                        name: "script",
                        mountPath: "/scripts",
                    }],
                }],
            },
        },
    },
}, {
    parent: cicdPhase,
    dependsOn: [weaveGitops, script, sa, role, roleBinding, authRole, authRoleBinding],
    replaceOnChanges: ["metadata.annotations"],
});
