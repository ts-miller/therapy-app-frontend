import React from 'react'
import { FormControl, Nav } from 'react-bootstrap'
import { Navbar, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg='primary' variant='dark' fixed="top">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="clients">Clients</Nav.Link>
                <Nav.Link as={Link} to="goals">Goals</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar