import React from "react";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/user"
import { useNavigate } from "react-router-dom";
import MyForm from "../../section/form";




const Login = (props)=>{
  const s = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (values, { setSubmitting }) => {
    const {email,password} =values
    dispatch(userLogin({email,password,navigate}))
    setSubmitting(false)
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
      <div className={s.loginForm}>
        <MyForm onSubmit={onSubmit} initialValues={{email:'',password:''}} formItem={formItem}/>
      </div>
    </div>
  )
}


export default Login

