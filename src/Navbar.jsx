import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoNew from './assets/logoNew.png';
import './Navbar.css';

const CustomNavbar = () =>
{
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const navbarRef = useRef(null);

    const handleScroll = () =>
    {
        const currentScrollPos = window.scrollY;
        const scrollingUp = prevScrollPos > currentScrollPos || currentScrollPos === 0;

        setIsNavbarVisible(scrollingUp);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll);

        return () =>
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <Navbar
            ref={navbarRef}
            className={`customNavbar ${isNavbarVisible ? 'visible' : 'hidden'}`}
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logoNew}
                        height="30"
                        className="d-inline-block align-top logo"
                        alt="Votex logo"
                    />
                    {' Votex'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Features</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
