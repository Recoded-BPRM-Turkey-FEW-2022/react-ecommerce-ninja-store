import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductPage from './components/ProductPage'
import Button from '@mui/material/Button';
import { useParams } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
// import MainPage from "./components/MainPage.jsx";  
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from 'react-query';

import Price from "./components/FilterPrice";
 import NewMain from './components/NewMain.js'

 
const queryClient = new QueryClient();

  const {id}=useParams();
export default function App() {
  return (

    <div>

       <QueryClientProvider client={queryClient}> 
      <BrowserRouter>  
      <Routes>

      <Route path='/' element={ <NewMain />} />

      <Route path='/products/:id' element={ <ProductPage />} />

      <Route path='/cart' element={ <Cart />} />
      </Routes>
      </BrowserRouter>
   
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
