import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CatPage from './CatPage';





function Category() {
    const [Category, setCategory] = useState([]);
    const url= 'https://fakestoreapi.com/products';
    useEffect(() => {
        fetch(`${url}/categories`)
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])


    return (
        <Router>
            <div>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {Category.map((item, index) => {
                        return (
                            <NavDropdown.Item key={index}>
                                <Link to={`/category/${item[0]}`}>{item}</Link>
                            </NavDropdown.Item>
                        )
                    }
                    )}
                </NavDropdown>
                <Routes path="*">
                    {Category.map((item, index) => {
                        return (
                            <Route path={`/category/${item[0]}`} element={<CatPage/>} />
                        )
                    })}
                </Routes>
            </div>
            
        </Router>
    )
}
export default Category;


