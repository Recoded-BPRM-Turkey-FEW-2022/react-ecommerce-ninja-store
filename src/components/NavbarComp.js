import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComp({setFiltered}) {
    console.log(setFiltered)
    const [q, setQ] = useState("");
    const [searchParam] = useState(["category", "title"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    function search(data) {
        return data.filter((item) => {
        if (item.category == filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
                });
        } else if (filterParam == "All") {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        }
        });
    }
    return(
        <div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown
                            title="Categories"
                            id="demo-simple-select"
                            label="Category"
                            onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}>
                            <NavDropdown.Item value="All"> All Categories </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item value="men's clothing">men's clothing </NavDropdown.Item>
                            <NavDropdown.Item value="women's clothing"> women's clothing </NavDropdown.Item>
                            <NavDropdown.Item value="electronics"> electronics </NavDropdown.Item>
                            <NavDropdown.Item value="jewelery"> jewelery </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
)
}

