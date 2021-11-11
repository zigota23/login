import * as axios from 'axios'
import store from '../index'

const instanse = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com'
})

instanse.interceptors.request.use(config=>{
  const token = store.getState().authReducer.token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default instanse