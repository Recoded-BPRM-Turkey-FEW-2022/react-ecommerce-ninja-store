
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown} from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Rating} from '@mui/material';
import NavbarComp from './NavbarComp';
import {useQuery} from 'react-query';



export default function Price (){
    const [maxPrice, setMaxPrice]= useState(0);
    
    const {data, isLoading} = useQuery('products',()=>{
      return fetch('https://api.escuelajs.co/api/v1/products').then ((data) => 
        data.json())
      });
    const [filteredData, setFilteredData]= useState(data);
    useEffect(()=>{
      if (maxPrice> 0 ){
          const priceFilter= data.filter((product)=> product.price < maxPrice);
          setFilteredData(priceFilter);  
      }
    },[maxPrice])

    if (isLoading) return "Loading...";
  

  
    return (
    console.log(data),
    <>  
    <NavbarComp/>
    <div className='priceFilter'>
        <input type="number" name='maxprice' placeholder='max price' value={maxPrice} onChange={(e) =>{setMaxPrice(e.target.value);}}></input>
    </div>
    <Container maxWidth="xl">
      <Grid container spacing={2} >

      {filteredData&&
      filteredData.map(item => (
      
      <Grid item xs={12} sm={6} md={4} xl={3}  >
      <Card className='card' key={item.id} sx={{ maxWidth: 300 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image= {item.images[0]}
        
      />
      <CardContent>
      
        <Typography variant="body2" color="text.primary">
          {item.title}
          <br/>
          {item.price}
        </Typography>

        <Typography  component="div">

        
                
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid>

      ))}  
      </Grid>
      </Container>
      </>
      )

}
