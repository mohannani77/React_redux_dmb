import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedproducts,removeselectedproducts } from '../Actions/ProductAction'
import LabelIcon from '@mui/icons-material/Label';
const ProductDetail = () => {
    const product=useSelector((state)=>state.product)
    const {productId}=useParams()
    const dispatch=useDispatch()
    console.log(product)
    const fetchProDetail=async()=>{
        const res=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err)
        })
        dispatch(selectedproducts(res.data))
    }

    useEffect(()=>{
        if(productId&& productId!==" ") fetchProDetail()
        return ()=>{
            dispatch(removeselectedproducts())
        }
    },[productId])
    const {id,category,title,image,price,rating,description}=product
  return (
    <div>
      <Stack marginTop={'50px'} justifyContent='center' flexDirection={'row'}>
        <Box height={'80vh'} width='300px' border={'1px solid black'}>
      <Box marginTop={'50px'} marginLeft='25px'>
      <img alt={title} src={image} height='400vh' width={'250vh'}></img>
      </Box>
        </Box>
        <Box height={'80vh'} width='400px' border={'1px solid black'} padding='15px'>
           <h3> <b>{title}</b></h3>
           <p>{description}</p>

          <Stack flexDirection={'row'} justifyContent='flex-start' alignItems={'center'}>
          <LabelIcon sx={{fontSize:60,color:'red',}}>{price}</LabelIcon>
            <h4>${price}</h4>
          </Stack>
            <Button marginLeft='10px' variant='contained'>Add</Button>
        </Box>
      </Stack>

    </div>
  )
}

export default ProductDetail
