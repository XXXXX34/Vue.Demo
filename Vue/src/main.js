import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import Welcome from './components/Welcome.vue';
import Home from './components/Home.vue';
import axios from 'axios';


Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

Vue.config.productionTip = true;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home, name: "home" },
    { path: '/welcome', component: Welcome, name: "welcome" }
];

const router = new VueRouter({
    routes
})

Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');