import React, { useEffect } from "react";
import { useStyles } from "./style";
import img from './../../assets/img/profile.png'
import { IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from "../../store/actions/user";
import { useSelector } from "react-redux";



const Profile = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {token,firstName,lastName} = useSelector(state=>state.authReducer)


  useEffect(()=>{
    if(token === '')navigate('/login')
  },[])


  const onClickDelete = ()=>{
    dispatch(deleteUser(navigate))
  }

  return(
    <div className={s.profile}>
      <div className={s.photo}><img src={img}/></div>
      <div className={s.userInfo}>
        <div className={s.firstName}><Typography>{firstName}</Typography></div>
        <div className={s.lastName}><Typography>{lastName}</Typography></div>
        <div className={s.updateProfile} onClick={()=>{navigate('/profile/update')}}><IconButton><BorderColorIcon/></IconButton></div>
        <div className={s.deleteUser} onClick={onClickDelete}><IconButton><DeleteIcon/></IconButton></div>
      </div>
    </div>
  )
}

export default Profile