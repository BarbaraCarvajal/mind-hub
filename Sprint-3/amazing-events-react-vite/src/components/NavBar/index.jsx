import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Con Bootstrap

const NavBar=(props) =>{
    
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Amazing Events</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/events">Eventos</Nav.Link>
                    <Nav.Link as={Link} to="/events/1">Evento</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

//Forma tradicional:
/*
function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/events"}>Eventos</Link>
                    </li>
                    <li>
                        <Link to={"/events/1"}>Evento</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
*/

