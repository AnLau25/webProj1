import './NavBar.css';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';


const NavBar = () => {
    
    const {activeLink, setactiveLink} = useState('home');

    
    return (
        <Navbar className="custom-navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">Insert logo here</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="Services" id="services-dropdown" className="no-caret">
                            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Notre équipe" id="team-dropdown" className="no-caret">
                            <NavDropdown.Item href="#team1">Team Member 1</NavDropdown.Item>
                            <NavDropdown.Item href="#team2">Team Member 2</NavDropdown.Item>
                            <NavDropdown.Item href="#team3">Team Member 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className="custom-nav-link">Prendre rendez-vous</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
