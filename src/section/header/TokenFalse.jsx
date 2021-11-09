import React from "react";
import Login from "@mui/icons-material/Login";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton, Tooltip } from "@mui/material";
import { useStyles } from "./style";
import { useNavigate } from "react-router";

const TokenFalse = ()=>{

  const s = useStyles()
  const navigate = useNavigate()

  return(
    <div>
    <Tooltip title="LogIn">
      <IconButton onClick={()=>{navigate('/login')}}>
        <Login color="inherit" className={s.icon} />
      </IconButton>
    </Tooltip>
    <Tooltip title="SignUp">
      <IconButton onClick={()=>{navigate('/signup')}}>
        <AddCircleOutlineIcon color="inherit" className={s.icon} />
      </IconButton>
    </Tooltip>
  </div>
  )
}

export default TokenFalse