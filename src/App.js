import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import MainPage from "./components/MainPage";
import Cart from "./components/Cart";

export default function App() {
  return (
    //<MainPage/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
