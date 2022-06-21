import React, { Component, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function Search() {
    const [Search, setSearch] = useState([]);
    const url= 'https://fakestoreapi.com/products';
    useEffect(() => {
        fetch(`${url}/search`)
        .then(res => res.json())
        .then(data => setSearch(data))
    }, [])
    return (
        <div>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 ms-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}
