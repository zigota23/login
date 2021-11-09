import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  signUpForm:{
    display:'flex',
    flexDirection:'column',
    width:300,
    margin:'0 auto',
    marginTop:100,
    '& button':{
      alignSelf:'start'
    }
  }

})