import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product";
import { useStyles } from "./style";
import { Button, IconButton, MenuItem, Rating, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Product = (props)=>{
  const s = useStyles()
  const token = useSelector(state=>state.authReducer.token)
  const products = useSelector(state=>state.productReducer.products)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page,setPage] = useState(0)
  const [itemPerPage,setIPP] = useState(5)

  useEffect(()=>{
    if(token === '')navigate('/login')
    else{
      dispatch(getProducts())
    } 
  },[])

  const items = ()=>{
    if(itemPerPage>0)return products.slice(itemPerPage*page,page*itemPerPage+itemPerPage)
    else return products
  }

  const handleChange = (value)=>{
    if(value.target.value)setIPP(value.target.value)
    else setIPP(products.length)
    setPage(0)
  }
  
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
            {items().map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  <Button sx={{color:'black',padding:0,justifyContent:'start'}}>{row.name}</Button>
                </TableCell>
                <TableCell align="right">{row.manufacturer}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right"><Rating name='read-only' value={row.rating} readOnly/></TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={s.setingTable}>
        <div className={s.setingPerPage}>
          <Typography>Item per page:</Typography>
          <Select
          value={itemPerPage}
          onChange={handleChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={0}>All</MenuItem>
          </Select>
        </div>
        <div className={s.setingPage}>
          <div className={s.pages}><Typography>{page*itemPerPage+1}-{page*itemPerPage+itemPerPage} of {products.length}</Typography></div>
          <div>
            <IconButton disabled={page*itemPerPage == 0}onClick={()=>{setPage(page-1)}}><ArrowBackIosIcon/></IconButton>
            
            <IconButton disabled={page*itemPerPage+itemPerPage >= products.length} onClick={()=>{setPage(page+1)}}><ArrowForwardIosIcon/></IconButton>  
          </div>

        </div>
      </div>
      </div>

  )
}


export default Product