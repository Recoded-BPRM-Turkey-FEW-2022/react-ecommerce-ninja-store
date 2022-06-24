import React from "react";
import {Link} from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "react-query";

function MainPage() {
  const { isLoading, error, data } = useQuery("repoData", async () => {
    let res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    return res.json();
  });
  console.log(data);

  if (isLoading) return "Loading...";
  return(
    <div>
    <h1>Products</h1>
        <div>
        {data.map((product) => (
        <div>
        <h2>Title</h2>
        <h3>{product.title}</h3>
        <Link to={`/products/${product.id}`}>Go to Product Page</Link>   
        </div>
            ))}
        </div>
    </div>
    
    )
    }
export default MainPage;
=======
import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query';
import ReactDom from 'react-dom/client';
//
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Rating} from '@mui/material';
import NavbarComp from './NavbarComp';
import { Link } from 'react-router-dom';
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
          return <div>
            <img style={{width:'100vw'}} src='https://www.wpoven.com/blog/wp-content/uploads/2022/05/502-1024x691.gif'/>
          </div>
     
      }
  return (
    
    console.log(data),
    <>  
    <NavbarComp setFiltered={setFiltered}/>
 
  <Container maxWidth="xl">
  <Grid container spacing={2} >
  
      {filtered.map(item => (
      
      <Grid key={item.id} item xs={12} sm={6} md={4} xl={3} onClick={()=>console.log(item.id)} >
       
<Card className='card'  sx={{ maxWidth: 300 }}>
    <CardActionArea>
    <Link to={`/Test/${item.id}`}>
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
          {item.title.substring(0, 50)}
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
        {/* <Grid sx={{ display: 'inline-flex' }}>     */}
            {/* <Rating
  name="text-feedback"
  value={item.rating.rate}
  readOnly
  precision={0.25}
                />
                
                ({item.rating.count})  
                </Grid> */}
                <div>
                {item.price}$
                </div>
                
                
        </Typography>
      </CardContent>
      </Link>
    </CardActionArea>
  </Card>
 
  </Grid>


      ))}  
      </Grid>
      </Container>
  
  
       </>


    
  )
 
}
