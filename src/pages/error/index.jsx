import { Alert } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import error_img from '../../assets/img/error-message.png'

const ErrorApi = (props)=>{

  const s = useStyles()

  return(
    <div className={s.errorMessage}>
      <div><img src={error_img}/></div>
      <Alert severity='error'>{props.error}</Alert>
    </div>
  )
}

export default ErrorApi