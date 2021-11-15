import { makeStyles } from "@mui/styles";
import { borderRadius, padding } from "@mui/system";

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
    width:'100%',
    '& button':{
      color:'#363e45',
      paddingTop:10,
      paddingBottom:10,
      width:'100%',
    }
  },
  formBox:{
    border:'2px solid #5c5c5c',
    backgroundColor:'white',
    paddingTop:20,
    '& form':{
      width:300,
      padding:'0 40px'
    }
  },
  titleForm:{
    marginLeft:10,
    marginBottom:20
  },
  blockButton:{
    marginBottom:20,
    '& button':{
      borderRadius:0
    }
  }
})