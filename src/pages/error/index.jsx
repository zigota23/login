import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./style";
import error_img from '../../assets/img/error-message.png'

const ErrorApi = (props)=>{

  const s = useStyles()
  const [view,setView] = useState(true)

  const handleClose = ()=>{
    setView(false)
  }

  return(
    <div className={s.errorMessage}>
      <div><img src={error_img}/></div>
      <Snackbar open={view} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {props.error}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ErrorApi