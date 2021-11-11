import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  blockSubmit:{
    display:'flex',
    marginTop:20,
    alignItems:'center',
    justifyContent:'space-between'
  },
  createProfile:{
    backgroundColor:'rgba(25, 118, 210,0.2)',
    textAlign:"center",
    marginTop:10,
    borderRadius:15,
    '& button':{
      color:'#363e45',
      paddingTop:10,
      paddingBottom:10,
      width:'100%',
      borderRadius:15,
    }
  }
})