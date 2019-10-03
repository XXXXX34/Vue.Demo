import Vue from 'vue';
import router from './router'
import App from './App.vue';
import axios from 'axios';
import store from './store'





Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

Vue.config.productionTip = true;



Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');