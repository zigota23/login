import { TextField } from '@mui/material'
import React from 'react'
import { useStyles } from './style'


const Input = ({type,name,onChange,onBlur,value,errors,touched,placeholder,sx})=>{

  const s = useStyles()

  return(
    <div className={s.divInput}>
      <div className={s.field}>
        <TextField
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          label={placeholder}
          variant="standard"
          sx={sx}
        />
      </div>
      <div className={s.error}>{errors && touched && errors}</div>
    </div>
    
  )
}

export default Input