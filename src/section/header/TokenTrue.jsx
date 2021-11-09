import React from "react";
import { useNavigate } from "react-router";
import { useStyles } from "./style";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Tooltip } from "@mui/material";


const TokenTrue = (props)=>{

  const s = useStyles()
  const navigate = useNavigate()

  const onClickLogout = ()=>{
    props.userLogout(props.token)
    if(props.token === '')navigate('/login')
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