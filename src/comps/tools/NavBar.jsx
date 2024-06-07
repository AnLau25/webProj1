import './NavBar.css';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleDropdownClick = (url) => (event) => {
        event.preventDefault();
        window.location.href = url;
    };

    const handleToggleClick = (event) => {
        event.preventDefault();
    };

    return (
        <Navbar className="custom-navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">Insert logo here</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="Services" id="services-dropdown" className="no-caret" onClick={handleDropdownClick('#servPage')} onMouseDown={handleToggleClick}>
                            <NavDropdown.Item href="#servPage">Nos services</NavDropdown.Item>
                            <NavDropdown.Item href="#calc">Estimer les coûts</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Notre équipe" className="no-caret" onClick={handleDropdownClick('#abtus')} onMouseDown={handleToggleClick}>
                            <NavDropdown.Item href="#abtus">À propos</NavDropdown.Item>
                            <NavDropdown.Item href="#locFind">Nos sites</NavDropdown.Item>
                            <NavDropdown.Item href="#experts">Nos équipes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#rndvs" className="custom-nav-link">Prendre rendez-vous</Nav.Link>
                    </Nav>
                    <div className="login-signup">
                        <Button className="signin-login-button">Sign In / Log In</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
