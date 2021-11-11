import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useStyles } from "./style";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userLogout } from "../../store/actions/user";


const TokenTrue = (props)=>{
  const s = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(state=>state.authReducer.token)

  useEffect(()=>{
    if(token === '')navigate('/login')
  },[token])

  const onClickLogout = ()=>{
    dispatch(userLogout())
  }

  return(
    <div>
    <Tooltip title="Profile">
      <IconButton onClick={()=>{navigate('/profile')}}>
          <AccountCircleIcon color="inherit" className={s.icon} />
      </IconButton>
    </Tooltip>
    <Tooltip title="LogOut" onClick={onClickLogout}>
      <IconButton>
          <LogoutIcon color="inherit" className={s.icon} />
      </IconButton>
    </Tooltip>
  </div>
  )
}


export default TokenTrue