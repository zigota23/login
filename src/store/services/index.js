import * as axios from 'axios'
import store from '../index'
import { userApi } from './user'

const instanse = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com'
})

instanse.interceptors.request.use(config=>{
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Access-Control-Allow-Origin'] ='*'
  return config
})

instanse.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry && originalRequest.url != "/users/renewAcessToken") {
    originalRequest._retry = true;
    await userApi.renewToken({token:localStorage.getItem('token')});            
    return instanse(originalRequest);
  }
  return Promise.reject(error);
})
export default instanse