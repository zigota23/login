import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useStyles } from "./style";
import { userUpdate } from "../../store/actions/user";
import { useDispatch } from "react-redux";
import MyForm from "../../section/form";



const Update = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()
  const {firstName,lastName,email,token} = useSelector(state=>state.authReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token === '')navigate('/login')
  },[])

  const onSubmit = (values, { setSubmitting }) => {
    const {firstName,lastName,email} = values
    dispatch(userUpdate({firstName,lastName,email,navigate}))
    setSubmitting(false)
  }

  const formItem = [
    {
      element:'Input',
      propsItem:{
        type:"firstName",
        name:"firstName",
        placeholder:'First name'
      }
      
    },
    {
      element:'Input',
      propsItem:{
        type:"lastName",
        name:"lastName",
        placeholder:'Last name',
        sx:{marginTop:'20px'}
      }
      
    },
    {
      element:'Input',
      propsItem:{
        type:"email",
        name:"email",
        placeholder:'Email',
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
    <div className={s.updateForm}>
      <MyForm onSubmit={onSubmit} initialValues={{firstName,lastName,email}} formItem={formItem}/>
    </div>
  )
} 


export default Update
