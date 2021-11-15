import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  signUpForm:{
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    top:'calc(50% - 255px)',
    left:'calc(50% - 190px)'
  },
  backgroungSignUp:{
    width:'100%',
    '& img':{
      display:'block',
      width:'100%',
      height:'100vh'
    }
  }

})