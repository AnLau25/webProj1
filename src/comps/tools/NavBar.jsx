import './NavBar.css';
import Sinsout from './Sinsout';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Modal } from 'react-bootstrap';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    const handleSignIn = () => {
        setIsSignedIn(true);
        handleClose(); // Close the modal after signing in
    };

    return (
        <>
            <Navbar className="custom-navbar" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-brand">Insert logo here</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Services" id="services-dropdown" className="no-caret">
                                <NavDropdown.Item href="#servPage">Nos services</NavDropdown.Item>
                                <NavDropdown.Item href="#calc">Estimer les coûts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Notre équipe" className="no-caret">
                                <NavDropdown.Item href="#abtus">À propos</NavDropdown.Item>
                                <NavDropdown.Item href="#locFind">Nos sites</NavDropdown.Item>
                                <NavDropdown.Item href="#experts">Nos équipes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#rndvs" className="custom-nav-link">Prendre rendez-vous</Nav.Link>
                        </Nav>
                        <div className="login-signup">
                            {isSignedIn ? (
                                <Button className="signin-login-button" onClick={handleSignOut}>Sign Out</Button>
                            ) : (
                                <Button className="signin-login-button" onClick={handleShow}>Sign In / Log In</Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
                <Modal.Body>
                    <Sinsout onClose={handleClose} onSignIn={handleSignIn} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavBar;
