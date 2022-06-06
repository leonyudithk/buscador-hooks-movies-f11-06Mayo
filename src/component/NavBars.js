import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBars = () => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <NavLink
                            activeClassName= 'active'
                            className="nav-item nav-link"
                            exact
                            to= '/senior'
                        >
                            The Lord of the Rings
                        </NavLink>
                        <NavLink
                            activeClassName= 'active'
                            className="nav-item nav-link"
                            exact
                            to= '/hobbit'
                        >
                           Hobbit
                        </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;