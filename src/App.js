import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
// import MainPage from "./components/MainPage.jsx";  
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider,QueryClient } from 'react-query';

import Price from "./components/FilterPrice";
import MainPage from "./components/NewMain"

const queryClient = new QueryClient();
export default function App() {
  return (
    <div>
      
      <QueryClientProvider client={queryClient}>
      <h1>React Ecommerce!</h1>
      <MainPage/>

      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
