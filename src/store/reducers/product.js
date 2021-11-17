import { SETPRODUCTS } from "../actionTypes/product"

const initialState = {
  products:[]
}


const productReducer = (state = initialState,action)=>{
  switch(action.type){

    case SETPRODUCTS:{
      return {
        ...state,
        products: action.payload
      }
    }
    
    default: return state
  }
}

export default productReducer