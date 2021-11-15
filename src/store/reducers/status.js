import { SETISERROR, SETISLOADING } from "../actionTypes/status"


const initialState = {
  isError:'',
  isLoading:false
}


const statusReducer = (state=initialState,action)=>{
  switch(action.type){
    case SETISLOADING:{
      return{
        ...state,
        isLoading:action.payload
      }
    }
    case SETISERROR:{
      return{
        ...state,
        isError:action.payload
      }
    }

    default : return state
  }
}

export default statusReducer