import Vue from 'vue';
import router from './router'
import App from './App.vue';
import store from './store'

Vue.config.productionTip = true;

Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.config.devtools = process.env.NODE_ENV === 'development';

var app = new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');


window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
Vue.config.devtools = process.env.NODE_ENV === 'development';