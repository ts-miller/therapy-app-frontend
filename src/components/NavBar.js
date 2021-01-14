import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
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
        </Navbar>
    )
}

export default NavBar