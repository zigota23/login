import React from "react";
import { validateEmail } from "../../validate";
import {Button} from "@mui/material";
import { Formik } from "formik";
import Input from './../../components/Input'
import { useStyles } from "./style";
import { useNavigate } from "react-router";

const MyForm = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()

  const items = (values,errors,touched,handleChange,handleBlur)=>(props.formItem.map((item,index)=>{

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

      default: return null
    }
  }))

  const textButton = ()=>{
    switch(props.typeForm){
      case 'signin': return 'Sign In'
      case 'signup': return 'Sign Up'
      case 'changeProfile': return 'Save'

      default : return null
    }
  }

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
            <div className={s.blockSubmit}>
              {props.typeForm=='signin'?<div className={s.staySing}><input type="checkbox" name="checkbox" onChange={handleChange} onBlur={handleBlur}  value={values.checkbox} errors={errors.checkbox} touched={touched.checkbox}/>Stay signed in?</div>:null}
              <div className={s.blockButton}>
                <Button type='submit' disabled={isSubmitting} variant='contained'>
                  {textButton()}
                </Button>
              </div>
            </div>
           {props.typeForm=='signin'?<div className={s.createProfile}><Button onClick={()=>{navigate('/signup')}}>Create an account</Button></div>:null}
          </form>
        )}
        </Formik>

  )
}

export default MyForm