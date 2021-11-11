import { LOGIN,SIGNUP,RENEWTOKEN,LOGOUT,GETUSER,DELETEUSER,USERUPDATE} from "../actionTypes/user"




  export const userLogin = (payload)=>({type:LOGIN,payload})
  
  export const userSignUp = (payload)=>({type:SIGNUP,payload})
  
  export const renewToken = (payload)=>({type:RENEWTOKEN,payload})
  
  export const userLogout = (payload)=>({type:LOGOUT,payload})
  
  export const getUser = (payload)=>({type:GETUSER,payload})
  
  export const deleteUser = (payload)=>({type:DELETEUSER,payload})
  
  export const userUpdate = (payload)=>({type:USERUPDATE,payload})