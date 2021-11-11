import { SETPRODUCTS } from "../actionTypes/product"

const initialState = {
  products:[]
}


const productReducer = (state = initialState,action)=>{
  switch(action.type){

    case SETPRODUCTS:{
      return{
        ...state,
        products:[...action.data]
      }
    }
    
    default: return state
  }
}

export default productReducer