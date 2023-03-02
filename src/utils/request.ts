import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});

// request拦截器
request.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
})
 
// response拦截器
request.interceptors.response.use((response) => { 
    // Do something with response data
    return response;
}, (error) => {
    // Do something with response error
    return Promise.reject(error);
})
