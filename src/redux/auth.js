
const initialState = {
  token:'',
  firstName:'',
  lastName:'',
  email:''
}

const authReducer = (state = initialState,action)=>{
  switch(action.type){
    
    case 'SET_DATA_USER':{
      return{
        ...state,
        ...action.data
      }
    }
    default: return state
  }
}


export const userLogin = (email,password)=>{
  return {type:"LOGIN",email,password}
}

export const userSignUp = (firstName,lastName,email,password)=>{
  return {type:"SIGNUP",firstName,lastName,email,password}
}

export const renewToken = (token)=>{
  return {type:"RENEWTOKEN",token}
}

export const userLogout = (token)=>{
  return {type:"LOGOUT",token}
}

export const getUser = (token)=>{
  return {type:"GETUSER",token}
}

export const deleteUser = (token)=>{
  return {type:"DELETEUSER",token}
}

export const userUpdate = (firstName,lastName,email,token)=>{
  return {type:"USERUPDATE",firstName,lastName,email,token}
}


export default authReducer