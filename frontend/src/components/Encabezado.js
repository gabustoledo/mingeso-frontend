import React, { Component } from "react";
import { Navbar,Nav } from 'react-bootstrap';
//import axios from "axios"

class Encabezado extends Component {

    render() {
        return(
            
            <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Portal de Diplomados</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/registrar">Registro Academicos</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/diplomados">Diplomados</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            </div>

        );
    }
}

export default Encabezado;