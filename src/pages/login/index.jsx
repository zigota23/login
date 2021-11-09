import {Button} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Header from "../../section/header";
import { useStyles } from "./style";
import Input from './../../components/Input'
import { connect } from "react-redux";
import { userLogin } from "../../redux/auth";
import { NavLink,useNavigate } from "react-router-dom";




const Login = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()

  const validate= values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  if(props.token !== '')navigate('/')

  

  const onSubmit = (values, { setSubmitting }) => {
    props.userLogin(values.email,values.password)
    navigate('/')  
    setSubmitting(false)
}
  return(
    <div>
      <Header/>
      <div className={s.loginForm}>
        <Formik
          initialValues={{email: '', password: '' }}
          validate={validate}
          onSubmit={onSubmit}
        >
        {({values,errors,
          touched,handleChange,
          handleBlur,handleSubmit,isSubmitting}) => (
          <form 
            onSubmit={handleSubmit}
            onKeyPress={(e)=>{if(e.key=='Enter')handleSubmit()}}
          >
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errors={errors.email}
              touched={touched.email}
              placeholder='Email'
              sx={{marginTop:'20px'}}
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errors={errors.password}
              touched={touched.password}
              placeholder='Password'
              sx={{marginTop:'20px'}}
            />
            <Button type="submit" disabled={isSubmitting} sx={{marginTop:'10px'}}>
              Submit
            </Button>
          </form>
        )}
        </Formik>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    token:state.authReducer.token
  }
}

export default connect(mapStateToProps,{userLogin})(Login)  

