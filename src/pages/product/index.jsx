import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product";
import { useStyles } from "./style";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


const Product = (props)=>{
  const s = useStyles()
  const token = useSelector(state=>state.authReducer.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token === '')navigate('/login')
    else{
      dispatch(getProducts())
    } 
  },[])


  
  return (
      <div className={s.products}>
        <TableContainer>
        <Table sx={{ minWidth:400,maxHeight:400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Manufacturer</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.manufacturer}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>

  )
}


export default Product