import instanse from "."


export const productApi = {
  createProduct:(payload)=>instanse.post('/products/create ',payload).then(respose=>respose),

  getProducts:()=>instanse.get('/products').then(respose=>respose),

  getProductWithId:(payload)=>instanse.get('/products/:'+payload.id).then(respose=>respose),

  updateProduct:({id,...payload})=>instanse.patch(`/products/:${id}/update`,payload).then(respose=>respose),
  
  deleteProducts:(payload)=>instanse.delete(`/products/:${payload.id}/delete`).then(respose=>respose)
}
