import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import ProductPage from './components/ProductPage'
import Button from '@mui/material/Button';



export default function App() {
  return (
    <div>
      <ProductPage/>
    </div>
  );
}
