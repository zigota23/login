import * as axios from 'axios'
import { userApi } from './user'

const instanse = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com/',
  withCredential:true
})

instanse.interceptors.request.use(config=>{
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Access-Control-Allow-Origin'] ='*'
  config.headers['Access-Control-Allow-Credential']=true
  return config
})

instanse.interceptors.response.use((response) => {
  response.headers['Access-Control-Expose-Headers']='Set-Cookie'
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry && originalRequest.url != "/refresh") {
    originalRequest._retry = true;
    await userApi.renewToken();            
    return instanse(originalRequest);
  }
  return error;
})
export default instanse