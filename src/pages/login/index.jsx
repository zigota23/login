import {Button} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect } from "react";
import Header from "../../section/header";
import { useStyles } from "./style";
import Input from './../../components/Input'
import { connect, useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions/user"
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../validate";
import MyForm from "../../section/form";




const Login = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()
  const token = useSelector(state=>state.authReducer.token)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token !== '')navigate('/')
  },[token])

  const onSubmit = (values, { setSubmitting }) => {
    const {email,password} =values
    dispatch(userLogin({email,password}))
    setSubmitting(false)
    navigate('/')  
}

const formItem = [
  {
    element:'Input',
    propsItem:{
      type:"email",
      name:"email",
      placeholder:'Email',
    }
    
  },
  {
    element:'Input',
    propsItem:{
      type:"password",
      name:"password",
      placeholder:'Password',
      sx:{marginTop:'20px'}
    }
    
  },
  {
    element:'Button',
    propsItem:{
      type:"submit",
      sx:{marginTop:'10px'}
    }
 
  }
]


  return(
    <div>
      <Header/>
      <div className={s.loginForm}>
        <MyForm onSubmit={onSubmit} initialValues={{email:'',password:''}} formItem={formItem}/>
      </div>
    </div>
  )
}


export default Login

