import {
  CREATEPRODUCT,
  DELETEPRODUCT,
  GETPRODUCTS,
  GETPRODWITHID,
  UPDATEPRODUCT,
  SETPRODUCTS
} from "../actionTypes/product";


export const setProduct=(payload) => ({type: SETPRODUCTS,payload})

export const createProduct=(payload) => ({type: CREATEPRODUCT,payload})

export const deleteProduct = (payload) => ({type: DELETEPRODUCT,payload})

export const getProducts = () => ({ type: GETPRODUCTS })

export const getProdWithId = (payload) => ({type: GETPRODWITHID,payload})

export const  updateProduct = (payload) => ({type: UPDATEPRODUCT,payload})

