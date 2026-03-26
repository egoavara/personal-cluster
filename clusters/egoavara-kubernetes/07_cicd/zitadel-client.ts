import * as k8s from "@pulumi/kubernetes";
import { cicdPhase } from "./phase.ts";
import { ns } from "./namespace.ts";
import { fluxWebUI } from "./flux-web-ui.ts";

const namespace = ns.metadata.name;

// --- RBAC ---
const sa = new k8s.core.v1.ServiceAccount("flux-web-oidc-sa", {
    metadata: { name: "flux-web-oidc-register", namespace },
}, { parent: cicdPhase });

const role = new k8s.rbac.v1.Role("flux-web-oidc-role", {
    metadata: { name: "flux-web-oidc-register", namespace },
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

const roleBinding = new k8s.rbac.v1.RoleBinding("flux-web-oidc-rb", {
    metadata: { name: "flux-web-oidc-register", namespace },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "flux-web-oidc-register" },
    subjects: [{ kind: "ServiceAccount", name: "flux-web-oidc-register", namespace }],
}, { parent: cicdPhase });

const authRole = new k8s.rbac.v1.Role("flux-web-oidc-auth-role", {
    metadata: { name: "flux-web-oidc-register", namespace: "auth" },
    rules: [{
        apiGroups: [""],
        resources: ["secrets"],
        resourceNames: ["iam-admin-pat"],
        verbs: ["get"],
    }],
}, { parent: cicdPhase });

const authRoleBinding = new k8s.rbac.v1.RoleBinding("flux-web-oidc-auth-rb", {
    metadata: { name: "flux-web-oidc-register", namespace: "auth" },
    roleRef: { apiGroup: "rbac.authorization.k8s.io", kind: "Role", name: "flux-web-oidc-register" },
    subjects: [{ kind: "ServiceAccount", name: "flux-web-oidc-register", namespace }],
}, { parent: cicdPhase });

// --- Script ---
const script = new k8s.core.v1.ConfigMap("flux-web-oidc-script", {
    metadata: { name: "flux-web-oidc-script", namespace },
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

# Check existing Secret
EXISTING=$(kubectl get secret "flux-web-config" -n "$NS" -o jsonpath='{.data.config\\.yaml}' 2>/dev/null | base64 -d 2>/dev/null | grep clientID || true)
if [ -n "$EXISTING" ]; then
    echo "flux-web-config Secret already exists, skipping"
    exit 0
fi

# Register or find OIDC client
APP_NAME="flux-web-ui"
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
            "name": "flux-web-ui",
            "redirectUris": ["https://gitops.private.egoavara.net/auth/callback"],
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

echo "Creating flux-web-config Secret (clientId=$CLIENT_ID)..."
cat <<CONFIGEOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: flux-web-config
  namespace: $NS
type: Opaque
stringData:
  config.yaml: |
    apiVersion: web.fluxcd.controlplane.io/v1
    kind: Config
    spec:
      baseURL: https://gitops.private.egoavara.net
      authentication:
        type: OAuth2
        sessionDuration: 24h
        oauth2:
          provider: OIDC
          clientID: "$CLIENT_ID"
          clientSecret: "$CLIENT_SECRET"
          issuerURL: "https://auth.egoavara.net"
          scopes:
            - openid
            - offline_access
            - profile
            - email
          impersonation:
            username: "claims.sub"
CONFIGEOF

echo "Restarting flux-operator web server..."
kubectl rollout restart deployment -n "$NS" -l app.kubernetes.io/name=flux-operator 2>/dev/null || true

echo "=== DONE ==="
`,
    },
}, { parent: cicdPhase });

// --- Job ---
export const zitadelClient = new k8s.batch.v1.Job("flux-web-oidc-register", {
    metadata: {
        name: "flux-web-oidc-register",
        namespace,
        annotations: {
            "cicd/script-version": script.metadata.resourceVersion,
        },
    },
    spec: {
        backoffLimit: 10,
        template: {
            spec: {
                serviceAccountName: "flux-web-oidc-register",
                restartPolicy: "OnFailure",
                volumes: [
                    { name: "script", configMap: { name: "flux-web-oidc-script", defaultMode: 0o755 } },
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
    dependsOn: [fluxWebUI, script, sa, role, roleBinding, authRole, authRoleBinding],
    replaceOnChanges: ["metadata.annotations"],
});
