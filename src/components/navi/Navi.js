import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navi() {
    return (
        <div className="navi">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Homework 2</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#contact">Hit me up</Nav.Link>
                    <Nav.Link href="#about">411</Nav.Link>
                    <Nav.Link href="#nothing" disabled>Don't Click this</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Built by: <a href="https://github.com/atclarkson" target="_blank" rel="noopener noreferrer" >@atclarkson</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navi;