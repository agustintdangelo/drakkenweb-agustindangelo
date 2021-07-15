import React from 'react';
import { Nav, Navbar, Button, FormControl, Form, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.scss';


const NavBar = (props) => {
    const ratones = "Mouse";
    const teclados = "Teclado";
    const procesadores = "Procesador";
    return (
        <Navbar bg="myViolet" variant="dark" expand="lg">
            <Navbar.Brand className="titulo" href="/">
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

                    <Nav.Link href="/">Inicio</Nav.Link>



                    <NavDropdown title="Categorías" id="basic-nav-dropdown">

                        <NavDropdown.Item ><Link to={`/categories/${ratones}`}>Ratones </Link></NavDropdown.Item>


                        <NavDropdown.Item ><Link to={`/categories/${teclados}`}>Teclados</Link></NavDropdown.Item>


                        <NavDropdown.Item ><Link to={`/categories/${procesadores}`}>Procesadores</Link></NavDropdown.Item>

                    </NavDropdown>

                    <Nav.Link >Contacto</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Buscar en Drakken" className="mr-sm-2" width="20" />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
             
                    <CartWidget />
               
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar
