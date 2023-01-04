import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Cardse = (products) => {
  const navigate=useNavigate()
  const {id,title,price,image,category}=products.products
 const clicker =e=>{
  e.preventDefault()
  navigate(`/product/${id}`)
 }
  return (
 <>

    <div>
        <Card sx={{height:"350px",width:"250px",border:'5',cursor:'pointer'}} elevation={5} onClick={clicker}>
        <CardMedia
        
        component="img"
         sx={{height:'200px',width:'200px',margin:'auto',paddingTop:'20px'}}
       
        image={image}
        alt="Paella dish"
      />
          <CardContent>
            <Typography><b>{title}</b></Typography>
            <Typography>${price}</Typography>
            <Typography>{category}</Typography>
          </CardContent>
        </Card>
    </div>
    </>
  )
}

export default Cardse
