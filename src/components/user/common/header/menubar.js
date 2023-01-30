import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineHome,MdDirectionsCar,MdInfoOutline, MdOutlineHeadphones } from "react-icons/md";

const Menubar = () => {
  return (
    <div className="menubar">
        <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><MdOutlineHome/>Home</Nav.Link>
            <Nav.Link as={Link} to="/vehicles"><MdDirectionsCar/>Vehicles</Nav.Link>
            <Nav.Link as={Link} to="/about"><MdInfoOutline/>About</Nav.Link>
            <Nav.Link as={Link} to="/scontact"><MdOutlineHeadphones/>Contact</Nav.Link>
          </Nav>

            <div>
                <Button variant='secondary' as={Link} to="/auth">Register</Button>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menubar