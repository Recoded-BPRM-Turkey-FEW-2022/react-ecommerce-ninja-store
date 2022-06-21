import React from 'react'
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
//import { Rating,Container,Grid,CardActionArea,Typography,CardMedia,Card,CardContent } from '@mui/material';

 



const fetchProducts= async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}


export default function MainPage() {
   
     const {data,status} = useQuery('products',fetchProducts);

     if (status === 'loading') {
          return <div>Loading...</div>
     }
      if (status === 'error') {
          return <div>Error</div>
     
      }
   
  return (
    
    console.log(data),
    <>  

  <Container maxWidth="xl">
  <Grid container spacing={2} >

      {data.map(item => (
      
      <Grid item xs={12} sm={6} md={4} xl={3}  >
<Card className='card' key={item.id} sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image= {item.image}
        
      />
      <CardContent>
      
        <Typography variant="body2" color="text.primary">
          {item.title}
        </Typography>

        <Typography  component="div">

        <Grid sx={{ display: 'inline-flex' }}>    
            <Rating
  name="text-feedback"
  value={item.rating.rate}
  readOnly
  precision={0.25}
                />
                
                ({item.rating.count})  
                </Grid>
                
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
