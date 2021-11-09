import { AppBar, Toolbar } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import React from "react";
import { useStyles } from "./style";
import { connect } from "react-redux";
import { userLogout } from "../../redux/auth";
import TokenTrue from "./TokenTrue";
import TokenFalse from "./TokenFalse";

const Header = (props) => {
  const s = useStyles();

  return (
    <AppBar className={s.appBar}>
      <Toolbar>
        <div className={s.bar}>
          <div className={s.logo}>
            <AndroidIcon />
          </div>
          <div className={s.menu}>
            {props.token == ''?<TokenFalse/>:<TokenTrue userLogout={props.userLogout} token={props.token}/>}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state)=>{
  return{
    token: state.authReducer.token
  }
}

export default connect(mapStateToProps,{userLogout})(Header);
