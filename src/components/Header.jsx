import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-white">
                <Container className='p-4'>
                    <Navbar.Brand as={Link} to={'/'}><h1 className='fw-bold'>Skill Hub</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            
                            <Nav.Link as={Link} to={'/'}>HOME</Nav.Link>
                            <Nav.Link as={Link} to={'/courses'}>COURSES</Nav.Link>
                            <Nav.Link as={Link} to={'/instructors'}>INSTRUTORS</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header