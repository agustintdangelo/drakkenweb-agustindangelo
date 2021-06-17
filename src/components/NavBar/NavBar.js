import React from 'react';
import {Nav, Navbar, NavDropdown, Button, FormControl, Form} from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <Navbar bg="myViolet" variant="dark" expand="lg">
            <Navbar.Brand classname="titulo" href="#home">
                <img
                    alt="Logo de Drakken"
                    src={props.logo}
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                />
                Drakken
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">Inicio</Nav.Link>
                    <Nav.Link href="">Productos</Nav.Link>
                    <Nav.Link href="">Contacto</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" width="20" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <CartWidget/>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar
