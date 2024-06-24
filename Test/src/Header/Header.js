import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, CartFill } from 'react-bootstrap-icons';
import './header.css'; 

export default function Header() {
    return (
        <div>
            <header className="header-container">
                <Container fluid>
                    <Row className="align-items-center py-2 border-bottom text">
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <span>CALL US (978) 634-9723</span>
                            <Facebook className="icon ms-3" />
                            <Twitter className="icon ms-3" />
                            <Instagram className="icon ms-3" />
                        </Col>
                        <Col xs={12} md={6} className="text-center text-md-end mt-2 mt-md-0">
                            <span className="d-inline-block me-3">TOBY'S (EXTRA DEMO)</span>
                            <span className="d-inline-block me-3">ADS PAGE</span>
                            <span className="d-inline-block me-3">MY ACCOUNT</span>
                            <CartFill className="icon me-2" />
                            <span>2 items</span>
                            <span className="ms-2">$32.01</span>
                        </Col>
                    </Row>
                    <Navbar expand="lg" className="py-3">
                        <Container>
                            <Navbar.Toggle aria-controls="navbar-nav" />
                            <Navbar.Collapse id="navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="HOME" id="home-nav-dropdown" className='hover-text'>
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="SHOP" id="shop-nav-dropdown" className='hover-text'>
                                        <NavDropdown.Item href="#action/4.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/4.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/4.3">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PRODUCTS" id="products-nav-dropdown" className='hover-text'>
                                        <NavDropdown.Item href="#action/5.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/5.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/5.3">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Navbar.Brand className="mx-auto mx-lg-0" href="#">
                                    Toby's <span style={{ color: 'black' }}>Boutique.</span>
                                </Navbar.Brand>
                                <Nav className="ms-auto">
                                    <Nav.Link href="/about">ABOUT</Nav.Link>
                                    <Nav.Link href="/news">NEWS</Nav.Link>
                                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </header>
        </div>
    );
}
