import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product";


const Product = ()=>{

  const products = useSelector(state=>state.productReducer.products)
  const dispatch = useDispatch()
  console.log(5)
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return(
    <></>
  )
}

export default Product