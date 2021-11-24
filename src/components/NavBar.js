import React, { Component } from "react";
import {Navbar,Container, Nav } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="p-4">
            <Navbar.Brand href="#home"><strong>REACT BOOTSTRAP</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#deets"><strong>PROJECTS</strong></Nav.Link>
                <Nav.Link href="#deets"><strong>ABOUT</strong></Nav.Link>
                <Nav.Link href="#deets"><strong>CONTACT</strong></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
