import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { compose } from "redux";
import withRedirectLogin from "../../hoc/withRedirectLogin";
import { useStyles } from "./style";
import { userUpdate } from "../../redux/auth";
import {Button} from "@mui/material";
import { Formik } from "formik";
import Header from "../../section/header";
import Input from './../../components/Input'



const Update = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()

  const validateEmail = values => {
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

  const onSubmit = (values, { setSubmitting }) => {
    props.userUpdate(values.firstName,values.lastName,values.email,props.token) 
    navigate('/profile')
    setSubmitting(false)
  }

  return(
    <div>
      <Header/>
      <div className={s.updateForm}>
        <Formik
          initialValues={{firstName:props.firstName,lastName:props.lastName,email:props.email}}
          validate={validateEmail}
          onSubmit={onSubmit}
        >
        {({values,errors,
          touched,handleChange,
          handleBlur,handleSubmit,isSubmitting}) => (
          <form 
          onSubmit={handleSubmit}
          onKeyPress={e=>{if(e.key === 'Enter')handleSubmit()}}
          >
            <Input
              type="firstName"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              errors={errors.firstName}
              touched={touched.firstName}
              placeholder='First name'
            />
            <Input
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              errors={errors.lastName}
              touched={touched.lastName}
              placeholder='Last name'
              sx={{marginTop:'20px'}}
              />
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
            <Button type="submit" disabled={isSubmitting} sx={{marginTop:'10px'}} >
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
    firstName:state.authReducer.firstName,
    lastName:state.authReducer.lastName,
    email:state.authReducer.email,
    token:state.authReducer.token
  }
}

export default compose(
  withRedirectLogin,
  connect(mapStateToProps,{userUpdate})
)(Update)
