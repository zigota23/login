import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";



const withRedirectLogin = (Component)=>{
  
  const RedirectLogin = ({token})=>{
    if(token !== '')return(<Component/>)
    else{
      return(<Navigate to='/login'/>)
    }
  }
  
    const mapStateToProps = (state)=>{
      return {
        token:state.authReducer.token
      }
    }

  return connect(mapStateToProps,{})(RedirectLogin)
}
export default withRedirectLogin