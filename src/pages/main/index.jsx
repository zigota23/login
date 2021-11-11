import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const Main = ()=>{

  const token = useSelector(state=>state.authReducer.token)
  const navigate = useNavigate()

  useEffect(()=>{
    if(token === '')navigate('/login')
  },[])

  return(
    <></>
  )
}

export default Main