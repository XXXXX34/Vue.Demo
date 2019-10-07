import Vue from 'vue';
import axios from 'axios';
import store from '../store';
import app from '../main'; // import the instance

Vue.prototype.$axios = axios
axios.defaults.baseURL = process.env.VUE_APP_API_BaseUrl;
axios.defaults.headers.common['Authorization'] = "Bearer " + store.state.oidcStore.access_token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    config.headers.Authorization = "Bearer " + store.state.oidcStore.access_token;
    console.info(config);
    app.$Progress.start();
    return config;
}, function(error) {
    app.$Progress.fail();
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    app.$Progress.finish();
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    app.$Progress.fail();
    return Promise.reject(error);
});

export default axios