import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>
                <Navbar.Brand as={Link} to='/'>Therapy App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Clients</Nav.Link>
                    <Nav.Link as={Link} to='/appointments'>Appointments</Nav.Link>
                </Nav>
        </Navbar>
    );
}

export default NavBar;
