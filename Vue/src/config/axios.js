import Vue from 'vue';
import axios from 'axios';
import store from '../store';

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:5004/api';
axios.defaults.headers.common['Authorization'] = "Bearer " + store.state.oidcStore.access_token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    config.headers.Authorization = "Bearer " + store.state.oidcStore.access_token;
    console.info(config);
    return config;
}, function(error) {
    return Promise.reject(error);
});

export default axios