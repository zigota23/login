import {
  CREATEPRODUCT,
  DELETEPRODUCT,
  GETPRODUCTS,
  GETPRODWITHID,
  UPDATEPRODUCT,
} from "../actionTypes/product";


export const createProduct=(payload) => ({type: CREATEPRODUCT,payload})

export const deleteProduct = (payload) => ({type: DELETEPRODUCT,payload})

export const getProducts = (payload) => ({type: GETPRODUCTS,payload})

export const getProdWithId = (payload) => ({type: GETPRODWITHID,payload})

export const  updateProduct = (payload) => ({type: UPDATEPRODUCT,payload})

