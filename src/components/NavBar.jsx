import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./img/logo.jpg";
import Message from './Message';

function Header() {
    return (
        <header className="p-4 shadow-md bg-slate-400">
            <div className="flex justify-between items-center">
                <h1 id="titulo" className="flex encabezado mr-auto">PanGourmet</h1>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Nosotros</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#home">Productos</Nav.Link>
                                <Nav.Link href="#link">Sucursales</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                            <div className="flex items-center">
                              
                                <ShoppingCart size={48} />
                                <span>1</span>
                                <Message/>
                            </div>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <img src={Logo} alt="" />
        </header>
    );
}

export default Header;
