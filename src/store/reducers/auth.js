import { SETDATAUSER } from "../actionTypes/user"

const initialState = {
  firstName:'',
  lastName:'',
  email:'',
}

const authReducer = (state = initialState,action)=>{
  switch(action.type){
    
    case SETDATAUSER:{
      return{
        ...state,
        ...action.data
      }
    }
    default: return state
  }
}

export default authReducer