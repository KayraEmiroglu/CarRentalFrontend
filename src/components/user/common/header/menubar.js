import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineHome,MdDirectionsCar,MdInfoOutline, MdOutlineHeadphones } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Menubar = () => {

  const {pathname} = useLocation();


  return (
    <div className="menubar">
      <Navbar expand="lg">
        <Container className="ps-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" active={pathname.startsWith("/")}><MdOutlineHome/> Home</Nav.Link>
              <Nav.Link as={Link} to="/vehicles" active={pathname.startsWith("/vehicles")}><MdDirectionsCar/> Vehicles</Nav.Link>
              <Nav.Link as={Link} to="/about" active={pathname.startsWith("/about")}><MdInfoOutline/> About</Nav.Link>
              <Nav.Link as={Link} to="/contact" active={pathname.startsWith("/contact")}><MdOutlineHeadphones/> Contact</Nav.Link>
            </Nav>
            
            <div>
                <Button variant="primary" as={Link} to="/auth">Register</Button>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
