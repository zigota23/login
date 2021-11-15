import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

export const useStyles = makeStyles({
  loginForm:{
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    top:'calc(50% - 200px)',
    left:'calc(50% - 190px)',
  },
  backgroungLogin:{
    width:'100%',
    '& img':{
      display:'block',
      width:'100%',
      height:'100vh'
    }
  }
})