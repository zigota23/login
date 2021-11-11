import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  products:{
    margin:'0 auto',
    marginTop:100,
    width:'90%',
  },
  setingTable:{
    display:'flex',
    alignItems:'center',
    justifyContent:'end',
    marginTop:30
  },
  setingPage:{
    display:'flex',
    marginLeft:30
  },
  pages:{
    marginLeft:30,
    marginRight:10,
    display:"flex",
    alignItems:'center'
  },
  setingPerPage:{
    display:'flex',
    alignItems:'center',
    '& p':{
      marginRight:10
    }
  }
})