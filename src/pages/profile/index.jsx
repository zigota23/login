import React from "react";
import Header from "../../section/header";
import { useStyles } from "./style";
import img from './../../img/profile.png'
import { IconButton, Typography } from "@mui/material";
import withRedirectLogin from "../../hoc/withRedirectLogin";
import { compose } from "redux";
import { connect } from "react-redux";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from "../../redux/auth";



const Profile = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()


  const onClickDelete = ()=>{
    props.deleteUser(props.token)
  }

  return(
    <>
      <Header/>
      <div className={s.profile}>
          <div className={s.photo}><img src={img}/></div>
          <div className={s.userInfo}>
            <div className={s.firstName}><Typography>{props.firstName}</Typography></div>
            <div className={s.lastName}><Typography>{props.lastName}</Typography></div>
            <div className={s.updateProfile} onClick={()=>{navigate('/profile/update')}}><IconButton><BorderColorIcon/></IconButton></div>
            <div className={s.deleteUser} onClick={onClickDelete}><IconButton><DeleteIcon/></IconButton></div>
          </div>
      </div>
    </>
  )
}

const mapStateToProps = (state)=>{
  return{
    firstName:state.authReducer.firstName,
    lastName:state.authReducer.lastName,
    token:state.authReducer.token
  }
}


export default compose(
  withRedirectLogin,
  connect(mapStateToProps,{deleteUser})
)(Profile)