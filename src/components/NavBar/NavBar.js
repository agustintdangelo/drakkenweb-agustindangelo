import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <Nav.Link>
            <Link className="inicio" to={`/drakkenweb-agustindangelo/`}>
              Inicio{" "}
            </Link>
          </Nav.Link>

          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item
              style={{ color: "#8548B3" }}
              as={Link}
              to={`/categories/${ratones}`}
            >
              Mouses{" "}
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ color: "#8548B3" }}
              as={Link}
              to={`/categories/${teclados}`}
            >
              Teclados
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ color: "#8548B3" }}
              as={Link}
              to={`/categories/${procesadores}`}
            >
              Procesadores
            </NavDropdown.Item>

            <NavDropdown.Item
              style={{ color: "#8548B3" }}
              as={Link}
              to={`/categories/${monitores}`}
            >
              Monitores
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
