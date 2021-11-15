import React from "react";
import gif from '../../assets/gif/1484.gif'
import { useStyles } from "./style";


const Loading = (props)=>{

  const s = useStyles()

  return (
    <div className={s.loading}>
      <img src={gif}/>
    </div>
  )
}

export default Loading
