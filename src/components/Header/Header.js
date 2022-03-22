import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt=""
                            width="35"
                            height="35"
                            className="d-inline-block align-top fw-bold"
                        />{' '}
                        MediCare
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="items">Home</Link>
                            <Link to="/doctors" className="items">Doctors</Link>
                            <Link to="/appointment" className="items">Get Appointment</Link>
                            <Link to="/online-doctor" className="items">Online Doctor</Link>
                            <Link to="/about" className="items">About Us</Link>
                            <Link to="/contact" className="items">Contact</Link>
                            {!user?.email && <Link to="/login" className="items" variant="danger">Sign In</Link>}
                            <span className="display-name fw-bold">{user.displayName || user.email}</span>
                            {user?.email && <Button onClick={logOut} className='ms-2 fw-bold' variant="danger">Sign Out</Button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;