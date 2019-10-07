import Vue from 'vue'
import axios from 'axios'

const firbaseAPI = axios.create({
    baseURL : 'http://localhost:5000/vue-test-403bd/us-central1/',
   // timeout: 5000, 
    headers:{'X-Custom-Header':'foobar'}
})

firbaseAPI.interceptors.request.use(function(config){
    config.headers.authorization = Math.random()
    return config;
}, function(error){
    return Promise.reject(error);
})

Vue.prototype.$axios = firbaseAPI