import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query';
import ReactDom from 'react-dom/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Rating} from '@mui/material';
import NavbarComp from './NavbarComp';
//import { Rating,Container,Grid,CardActionArea,Typography,CardMedia,Card,CardContent } from '@mui/material';

 



const fetchProducts= async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  return data;
}


export default function MainPage() {
  const {data,status} = useQuery('products',fetchProducts);
  
  const [filtered, setFiltered]= useState(data)
    if (status === 'loading') {
          return <div>Loading...</div>
     }
      if (status === 'error') {
          return <div>Error</div>
     
      }
  return (
    
    console.log(data),
    <>  
    <NavbarComp setFiltered={setFiltered}/>
  <Container maxWidth="xl">
  <Grid container spacing={2} >
  
      {filtered.map(item => (
      
      <Grid item xs={12} sm={6} md={4} xl={3}  >
<Card className='card' key={item.id} sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image= {item.images}
        
      />
      <CardContent>
      
        <Typography variant="body2" color="text.primary">
          {item.title}
          {<br/>}
          {item.price}
        </Typography>

        <Typography  component="div">

        {/* <div className='d-flex'>
          <Rating
            name="text-feedback"
            value={item.rating.rate}
            readOnly
            precision={0.25}/>
            ({item.rating.count})  
          </div> */}
                
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
