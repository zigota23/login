import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  divInput:{
    display:'flex',
    flexDirection:'column'
  },
  error:{
    color:'red'
  },
  field:{
    '& div':{
      width:'100%'
    },
    '& input':{
      paddingTop:10,
      paddingBottom:10
    }
    
  }
})