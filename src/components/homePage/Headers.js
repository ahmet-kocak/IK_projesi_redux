import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";
export default class Headers extends Component {
  render() {
    return (
      <div >
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top"  style={{fontSize:"20px", position:"fixed",height:"65px" }}>
          <Container >
          <Navbar.Brand as={Link} to="">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Canditates">Candidates</Nav.Link>
                <Nav.Link as={Link} to="/About">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
