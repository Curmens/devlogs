import axios from 'axios'
// import NProgress from "vue-nprogress";
// import Vue from "vue";
// import LocalStorageService from "./token";
// import router from "../router";


// Vue.use(NProgress);

// const nprogress = new NProgress();

const getAPI = axios.create({
    // Unused due to database conflict


    baseURL: 'https://api.github.com/users/',
    // baseURL: 'https://littapi.herokuapp.com',
    timeout: 70000,
})

// // before a request is made start the nprogress
// getAPI.interceptors.request.use(config => {
//   nprogress.start();
//   return config
// })

// // before a response is returned stop nprogress
// getAPI.interceptors.response.use(res => {
//   nprogress.done();
//   return res;
// })

export default getAPI

// export { getAPI }


// LocalstorageService
// const localStorageService = LocalStorageService.getService();

// Add a request interceptor
// getAPI.interceptors.request.use(
//     config => {
//         config.headers['Authorization'] = 'Bearer ' + token;

//         return config;
//     },
//     error => {
//         Promise.reject(error)
//         console.log('Debug :55')
//     });



//Add a response interceptor

// getAPI.interceptors.response.use(
//     (response) => {return response},
    
//     async function(error) {

//         if (error.response.status === 401) {
//             router.push("/");
//             return Promise.reject(error);
//         }

//         return Promise.reject(error);
//     }
// );