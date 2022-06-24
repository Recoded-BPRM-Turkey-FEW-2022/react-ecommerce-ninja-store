import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query';
import ReactDom from 'react-dom/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Rating} from '@mui/material';
import NavbarComp from './NavbarComp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Rating,Container,Grid,CardActionArea,Typography,CardMedia,Card,CardContent } from '@mui/material';



const fetchProducts= async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  return data;
}


export default function MainPage() {
  const {data,status} = useQuery('products',fetchProducts);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["category", "title"]);
  const [filterParam, setFilterParam] = useState(["All"]);


  const [maxPrice, setMaxPrice]= useState(0);

  const [filteredData, setFilteredData]= useState(data);

    useEffect(()=>{
      if (maxPrice> 0 ){
          const priceFilter= data.filter((product)=> product.price < maxPrice);
          setFilteredData(priceFilter);  
      }
    },[maxPrice])


  const [filtered, setFiltered]= useState(data)
    if (status === 'loading') {
          return <div>Loading...</div>
     }
      if (status === 'error') {
          return <div>Error</div>
     
      }
      function search(data) {
        return data.filter((item) => {
        if (item.category == filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
                });
        } else if (filterParam == "All") {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        }
        });
    }
  return (
    
    console.log(data),
    <>  
            <div>
        <Navbar bg="light" expand="lg">
        
            <Container fluid>
                <Navbar.Brand href="#">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div className='priceFilter'>
        <input type="number" name='maxprice' placeholder='max price' value={maxPrice} onChange={(e) =>{setMaxPrice(e.target.value);}}></input>
        </div>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown
                            title="Categories"
                            id="demo-simple-select"
                            label="Category"
                            onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}>
                            <NavDropdown.Item value="All"> All Categories </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item value="men's clothing">men's clothing </NavDropdown.Item>
                            <NavDropdown.Item value="women's clothing"> women's clothing </NavDropdown.Item>
                            <NavDropdown.Item value="electronics"> electronics </NavDropdown.Item>
                            <NavDropdown.Item value="jewelery"> jewelery </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  <Container maxWidth="xl">
  <Grid container spacing={2} >
  
      {search(data).map(item => (
      
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
