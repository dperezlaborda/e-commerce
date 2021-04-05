import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';


const NavBar2 = () => {
    return (
        <header id="header-area">
            <div className="main-menu fixed-top">
                <Navbar expand="lg">
                    <Container fluid>
                        <div className="logo">
                            <NavLink to="/">
                                <Navbar.Brand className="py-0 pl-2">
                                    <img src={logo} alt="logo en mobile" />
                                </Navbar.Brand>
                            </NavLink>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler ml-auto" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink to="/" exact className="nav-link">Inicio</NavLink>
                                <NavDropdown title="Shop" id="basic-nav-dropdown">
                                    <NavLink to="/todos" exact className="dropdown-item" >Todos los productos</NavLink>
                                    <NavLink to="/sillas" className="dropdown-item" >Sillas</NavLink>
                                    <NavLink to="/escritorios" className="dropdown-item">Escritorios</NavLink>
                                    <NavLink to="/deco" className="dropdown-item">Decoración</NavLink>
                                </NavDropdown>
                                <NavLink to="/info" className="nav-link">Info y Ayuda</NavLink>
                                <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                            </Nav>
                            <Nav>
                                <NavLink className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </NavLink>
                                <NavLink className="nav-link" to="/login">
                                    <FontAwesomeIcon icon={faUser} />
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header >
    )
}

export default NavBar2;
