import { AppBar, Toolbar,IconButton, Tooltip  } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import React, { useEffect } from "react";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import TokenTrue from "./TokenTrue";
import TokenFalse from "./TokenFalse";
import { useNavigate } from "react-router";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { setDataUser } from "../../store/actions/user";



const Header = (props) => {
  const s = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')



  return (
    <AppBar className={s.appBar}>
      <Toolbar>
        <div className={s.bar}>
          <div className={s.logo}>
            <AndroidIcon />
          </div>
          <div  className={s.menu}>
            <div className={s.menu_product}>
              <Tooltip title="Products">
                <IconButton onClick={()=>{navigate('/product')}}>
                  <AllInboxIcon color="inherit" className={s.icon} />
                </IconButton>
              </Tooltip>
            </div>
            
          <div className={s.menu_user}>
            {!token? <TokenFalse/> : <TokenTrue/>}
          </div>
          </div>
          
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
