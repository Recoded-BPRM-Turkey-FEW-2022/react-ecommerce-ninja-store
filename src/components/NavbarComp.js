import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Category from './Category';
import Filter from './Filter';
import Search from './Search';

export default function NavbarComp() {

    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 d-flex" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Category />
            <Filter />
            <Search />
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    </div>
    )
}

