import * as axios from 'axios'

const instanse = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com'
})


export const userApi = {
  signup:(firstName,lastName,email,password)=>instanse.post('/users/signup',{firstName,lastName,email,password}).then(respose=>respose),
  login:(email,password)=>instanse.post('/users/login',{email, password}),
  renewToken:(token)=>instanse.post('/users/renewAcessToken',{token}),
  logout:(token)=>instanse.patch('/users/logout',null,{headers:{Authorization: `Bearer ${token}`}}).then(respose=>respose),
  getMe:()=>instanse.get('/users/me'),
  userUpdate:(firstName,lastName,email,token)=>instanse.patch('/users/update',{firstName,lastName,email},{headers:{Authorization: `Bearer ${token}`}}).then(respose=>respose),
  userDelete:(token)=>instanse.delete('/users/delete',{headers:{Authorization: `Bearer ${token}`}}).then(respose=>respose)
}


