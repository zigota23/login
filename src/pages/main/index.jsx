import React from "react";
import Header from "../../section/header";
import withRedirectLogin from "../../hoc/withRedirectLogin";


const Main = ()=>{

  return(
    <Header/>
  )
}

export default withRedirectLogin(Main)