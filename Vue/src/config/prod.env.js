VUE_APP_OIDC_CONFIG = {
    "authority": "http://47.112.212.161:9101",
    "clientId": "js",
    "redirectUri": "http://localhost:8080/oidc-callback",
    "responseType": "id_token token",
    "scope": "openid profile vue.api",
    "automaticSilentRenew": true,
    "silentRedirectUri": "http://localhost:8080/silent-renew-oidc.html"
}