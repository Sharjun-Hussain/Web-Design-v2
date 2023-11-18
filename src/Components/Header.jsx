import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid style={{padding:"0px", margin:"0px"}}>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bg-body-tertiary " bg="dark" data-bs-theme="light"
      >
        <Navbar.Brand className="text-white" href="/">Studyz Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/Blog">Blog</Nav.Link>
            <Nav.Link className="text-white" href="/About-Us">About-Us</Nav.Link>
            <Nav.Link  className="text-white" href="/Contact-Us">Contact-Us</Nav.Link>
            
           
            <Button className="BtnBar  ml-3 mr-4">Subscribe</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </Container>
  );
};

export default Header;
