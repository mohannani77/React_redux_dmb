import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cardse from './Cardse'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allproducts.products)
    const navigate=useNavigate()
  return (
<div>
<Box marginTop={5} marginLeft={3}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
  {products.map((products,index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
       <Cardse products={products}/> 
    </Grid>
  ))}
</Grid>
      </Box>
</div>
  )
}

export default ProductComponent
