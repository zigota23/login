import React, { useEffect } from "react";
import { useStyles } from "./style";
import img from './../../assets/img/profile.png'
import { IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser, getUser } from "../../store/actions/user";
import { useSelector } from "react-redux";



const Profile = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {first_name,last_name} = useSelector(state=>state.authReducer)


  const onClickDelete = ()=>{
    dispatch(deleteUser({navigate}))
  }

  return(
    <div className={s.profile}>
      <div className={s.photo}><img src={img}/></div>
      <div className={s.userInfo}>
        <div className={s.firstName}><Typography>{first_name}</Typography></div>
        <div className={s.lastName}><Typography>{last_name}</Typography></div>
        <div className={s.updateProfile} onClick={()=>{navigate('/profile/update')}}><IconButton><BorderColorIcon/></IconButton></div>
        <div className={s.deleteUser} onClick={onClickDelete}><IconButton><DeleteIcon/></IconButton></div>
      </div>
    </div>
  )
}

export default Profile