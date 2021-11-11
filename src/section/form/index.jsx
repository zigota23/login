import React from "react";
import { validateEmail } from "../../validate";
import {Button} from "@mui/material";
import { Formik } from "formik";
import Input from './../../components/Input'

const MyForm = (props)=>{

  const items = (values,errors,touched,handleChange,handleBlur,isSubmitting)=>(props.formItem.map((item,index)=>{

    switch(item.element){
      case 'Input':{
        const {type,name,placeholder,sx} = item.propsItem
        return(
          <Input
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[name]}
              errors={errors[name]}
              touched={touched[name]}
              placeholder={placeholder}
              sx={sx}
              key={index}
           />
        )
      }

      case 'Button':{
        const {type,sx} = item.propsItem
        return(
          <Button type={type} disabled={isSubmitting} sx={sx} key={index}>
            Submit
          </Button>
        )
      }

      default: return null
    }
  }))

  return (
    <Formik
          initialValues={props.initialValues}
          validate={validateEmail}
          onSubmit={props.onSubmit}
        >
        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
          <form 
          onSubmit={handleSubmit}
          >
            {items(values,errors,touched,handleChange,handleBlur,isSubmitting)}
          </form>
        )}
        </Formik>

  )
}

export default MyForm