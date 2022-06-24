import React from "react";
import "./style.css";
<<<<<<< HEAD
import { useQuery } from "react-query";
import ProductPage from './components/ProductPage'
import Button from '@mui/material/Button';


=======
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
// import MainPage from "./components/MainPage.jsx";  
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from 'react-query';
>>>>>>> 37eed78f06276a552e98673c3fd49f9a10465f66

import Price from "./components/FilterPrice";
import MainPage from "./components/NewMain"

import {BrowserRouter  , Route, Link, Routes } from 'react-router-dom';
import Test from './components/Test.jsx'
import FakeCart from "./components/FakeCart";
 import NewMain from './components/NewMain.js'

 
const queryClient = new QueryClient();
export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <ProductPage/>
=======
      

      {/* <MainPage/> */}

       <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
      
      <Routes>

      <Route path='/' element={ <NewMain />} />

      <Route path='/Test/:id' element={ <Test />} />

      <Route path='/FakeCart' element={ <FakeCart />} />
      
      </Routes>
      </BrowserRouter>
   
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
>>>>>>> 37eed78f06276a552e98673c3fd49f9a10465f66
    </div>
  );
}
