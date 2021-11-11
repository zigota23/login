import instanse from './index'

export const userApi = {
  signup:(payload)=>instanse.post('/users/signup',{...payload}).then(respose=>respose),

  login:(payload)=>instanse.post('/users/login',{...payload}),

  renewToken:(payload)=>instanse.post('/users/renewAcessToken',{...payload}),

  logout:()=>instanse.patch('/users/logout').then(respose=>respose),

  getMe:()=>instanse.get('/users/me'),

  userUpdate:(payload)=>instanse.patch('/users/update',{...payload}).then(respose=>respose),

  userDelete:()=>instanse.delete('/users/delete').then(respose=>respose)
}