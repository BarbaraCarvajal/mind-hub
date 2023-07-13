import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Amazing Events</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/past-events">Eventos Pasados</Nav.Link>
          <Nav.Link as={Link} to="/upcoming-events">Próximos Eventos</Nav.Link>
          <Nav.Link as={Link} to="/estadisticas">Estadisticas</Nav.Link> 
          <Nav.Link as={Link} to= "/contacto">Contacto</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
