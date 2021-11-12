import { SETISLOADING } from "../actionTypes/status"


const initialState = {
  isError:false,
  isLoading:false
}


export default statusReducer = (state=initialState,action)=>{
  switch(action.type){
    case SETISLOADING:{
      return{
        ...state,
        isLoading:action.payload
      }
    }
  }
}