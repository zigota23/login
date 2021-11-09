import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  profile:{
    display:'flex',
    flexDirection:'row',
    marginTop:100
  },
  photo:{
    width:150,
    '& img':{
      width:'100%',
      height:'auto'
    }
  }
})