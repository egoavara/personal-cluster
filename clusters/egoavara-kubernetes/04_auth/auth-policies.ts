import * as k8s from "@pulumi/kubernetes";
import { authPhase } from "./phase.ts";
import { ingress as ingressConfig } from "../utils/config.ts";
import { privateGateway } from "./private-gateway.ts";

const privateDomain = `private.${ingressConfig.domain}`;

// guard ext-authz 통합: Istio는 워크로드(Gateway)당 1 provider만 허용
export const privateAuthPolicy = new k8s.apiextensions.CustomResource("private-extauthz", {
    apiVersion: "security.istio.io/v1",
    kind: "AuthorizationPolicy",
    metadata: {
        name: "private-extauthz",
        namespace: "istio-system",
    },
    spec: {
        targetRefs: [{
            kind: "Gateway",
            group: "gateway.networking.k8s.io",
            name: "private-gateway",
        }],
        action: "CUSTOM",
        provider: { name: "guard" },
        rules: [{
            to: [{
                operation: {
                    hosts: [
                        `ceph.${privateDomain}`,
                        `hubble.${privateDomain}`,
                    ],
                },
            }],
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway] });

// Lua EnvoyFilter: guard 보호 앱의 HTML 응답에 floating logout widget 자동 주입
// 동작 원리:
//   1. ext-authz가 허용하면 x-auth-request-user 헤더가 request에 추가됨
//   2. Lua request phase에서 이 헤더를 감지 → dynamic metadata에 저장
//   3. Lua response phase에서 metadata 확인 + Content-Type text/html → widget 주입
// 앱별 설정 불필요 — guard 보호 여부를 자동 탐지
export const guardWidget = new k8s.apiextensions.CustomResource("guard-widget-filter", {
    apiVersion: "networking.istio.io/v1alpha3",
    kind: "EnvoyFilter",
    metadata: {
        name: "guard-widget",
        namespace: "istio-system",
    },
    spec: {
        workloadSelector: {
            labels: {
                "gateway.networking.k8s.io/gateway-name": "private-gateway",
            },
        },
        configPatches: [{
            applyTo: "HTTP_FILTER",
            match: {
                context: "GATEWAY",
                listener: {
                    filterChain: {
                        filter: {
                            name: "envoy.filters.network.http_connection_manager",
                            subFilter: { name: "envoy.filters.http.router" },
                        },
                    },
                },
            },
            patch: {
                operation: "INSERT_BEFORE",
                value: {
                    name: "envoy.filters.http.lua",
                    typed_config: {
                        "@type": "type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua",
                        default_source_code: {
                            inline_string: `
function envoy_on_request(handle)
  local user = handle:headers():get("x-auth-request-user")
  if user then
    handle:streamInfo():dynamicMetadata():set("guard", "user", user)
  end
end

function envoy_on_response(handle)
  local meta = handle:streamInfo():dynamicMetadata():get("guard")
  if not meta or not meta["user"] then return end

  local ct = handle:headers():get("content-type") or ""
  if not string.find(ct, "text/html") then return end

  local user = meta["user"]
  local body = handle:body(true)
  if not body then return end

  local raw = body:getBytes(0, body:length())
  local widget = [[
<div id="__guard" style="position:fixed;bottom:16px;right:16px;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<button onclick="document.getElementById('__guard_p').style.display=document.getElementById('__guard_p').style.display==='none'?'block':'none'"
 style="width:40px;height:40px;border-radius:50%;border:none;background:#1e293b;color:#94a3b8;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);font-size:18px;display:flex;align-items:center;justify-content:center">
&#x1f6e1;</button>
<div id="__guard_p" style="display:none;position:absolute;bottom:48px;right:0;background:#1e293b;border:1px solid #334155;border-radius:8px;padding:12px 16px;min-width:200px;box-shadow:0 4px 12px rgba(0,0,0,.4)">
<div style="color:#94a3b8;font-size:12px;margin-bottom:8px">Signed in as</div>
<div style="color:#e2e8f0;font-size:14px;font-weight:600;margin-bottom:12px;word-break:break-all">]] .. user .. [[</div>
<a href="/_guard/sign_out" style="display:block;text-align:center;padding:6px 12px;background:#dc2626;color:#fff;border-radius:6px;text-decoration:none;font-size:13px;font-weight:500">Sign Out</a>
</div></div>]]

  local closing = string.find(raw, "</body>", 1, true)
  if closing then
    local modified = string.sub(raw, 1, closing - 1) .. widget .. string.sub(raw, closing)
    body:setBytes(modified)
    handle:headers():replace("content-length", tostring(#modified))
  end
end`,
                        },
                    },
                },
            },
        }],
    },
}, { parent: authPhase, dependsOn: [privateGateway, privateAuthPolicy] });
