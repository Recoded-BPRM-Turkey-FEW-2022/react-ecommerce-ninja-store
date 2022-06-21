import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CatPage from "./CatPage";





function Filter() {
    const [Price, setPrice] = useState([]);
    const [Rating, setRating] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setRating(data))
    }, [])


    return (
        <Router>
        <div>
            <NavDropdown title="Filter" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/Top`}>
                Top Rated
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/PriceRange`}>
                PriceRange
                </NavDropdown.Item>
            </NavDropdown>
        </div>
        <Routes path="*">
            <Route path={`/Top`} element={<CatPage/>} />
            <Route path={`/PriceRange`} element={<CatPage/>}/>
        </Routes>
        </Router>
    )
}
export default Filter;

