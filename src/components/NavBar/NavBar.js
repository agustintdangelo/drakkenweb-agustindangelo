import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.scss";

const NavBar = (props) => {
  const ratones = "Mouse";
  const teclados = "Teclado";
  const procesadores = "Procesador";
  const monitores = "Monitor";

  return (
    <Navbar bg="myViolet" variant="dark" expand="lg">
      <Link to={`/drakkenweb-agustindangelo/`}>
        <Navbar.Brand className="titulo">
          <img
            alt="Logo de Drakken"
            src={props.logo}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />
          Drakken
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
        <Nav.Link><Link className="inicio" to={`/drakkenweb-agustindangelo/`}>Inicio </Link></Nav.Link>

          
          
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink
                className="categories-style"
                to={`/categories/${ratones}`}
              >
                Ratones{" "}
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className="categories-style"
                to={`/categories/${teclados}`}
              >
                Teclados
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className="categories-style"
                to={`/categories/${procesadores}`}
              >
                Procesadores
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className="categories-style"
                to={`/categories/${monitores}`}
              >
                Monitores
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

      
        </Nav>

        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
