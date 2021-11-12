import instanse from ".";

export const productApi = {
  createProduct: async(payload) =>{
    return await instanse.post("/products/create ", payload).then((respose) => respose)
  },

  getProducts:async() => {
    return await instanse.get("/products").then((respose) => respose)
  },

  getProductWithId:async(payload) =>{
    return await instanse.get("/products/:" + payload.id).then((respose) => respose)
  },

  updateProduct: async({ id, ...payload }) =>{
    return await instanse.patch(`/products/:${id}/update`, payload)
  },

  deleteProducts: async(payload) =>{
    return await instanse.delete(`/products/:${payload.id}/delete`)
  },
};
