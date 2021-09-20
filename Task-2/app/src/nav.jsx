import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export const NavbarComp = ({onClick}) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="py-4">
            <Container>
                <Navbar.Brand href="/#">Let's Grow More</Navbar.Brand>
                <Nav>
                    <Nav.Item> 
                        <Button variant="outline-primary" onClick={onClick}>Get Users</Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
