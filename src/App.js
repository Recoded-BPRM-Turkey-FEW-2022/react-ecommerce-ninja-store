import React from "react";
import "./style.css";
import MainPage from "./components/MainPage.jsx";  
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from 'react-query';
import {BrowserRouter  , Route, Link, Routes } from 'react-router-dom';
import Test from './components/Test.jsx'
import FakeCart from "./components/FakeCart";
 

 
const queryClient = new QueryClient();
export default function App() {
  return (
    <div>
       <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
      <h1>React Ecommerce!</h1>
      <Routes>

      <Route path='/' element={ <MainPage />} />

      <Route path='/Test/:id' element={ <Test />} />

      <Route path='/FakeCart' element={ <FakeCart />} />
      
      </Routes>
      </BrowserRouter>
   
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
