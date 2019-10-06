import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import TableDemo from './components/TableDemo.vue'
import OidcCallback from './components/OidcCallback.vue'
import OidcCallbackError from './components/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from './store'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            component: Home,
            meta: {
                isPublic: true
            },
            name: "home"
        },
        {
            path: '/welcome',
            component: Welcome,
            meta: {
                isPublic: true
            },
            name: "welcome"
        },
        {
            path: '/table',
            component: TableDemo,
            meta: {
                isPublic: true
            },
            name: "table"
        },
        {
            path: '/protected',
            name: 'protected',
            component: () =>
                import ('./components/Protected.vue')
        },
        { path: '/oidc-callback', component: OidcCallback, name: "oidcCallback" },
        {
            path: '/oidc-callback-error',
            name: 'oidcCallbackError',
            component: OidcCallbackError,
            meta: {
                isPublic: true
            }
        }
    ]
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router