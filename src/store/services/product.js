import instanse from "./index";

export const productApi = {
  createProduct: async(payload) =>{
    return await instanse.post("/products/create ", payload)
  },

  getProducts:async() => {
    return await instanse.get("/products")
  },

  getProductWithId:async(payload) =>{
    return await instanse.get("/products/:" + payload.id)
  },

  updateProduct: async({ id, ...payload }) =>{
    return await instanse.patch(`/product-update`, payload)
  },

  deleteProducts: async(payload) =>{
    return await instanse.delete(`/products-delete /:${payload.id}/delete`)
  },
};
