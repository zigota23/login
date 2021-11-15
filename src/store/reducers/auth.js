import { SETDATAUSER } from "../actionTypes/user"

const initialState = {
  first_name:'',
  last_name:'',
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