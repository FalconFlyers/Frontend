import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const navBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "images/Balance_within_you logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          //   alt="WP logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">WP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Explore</Nav.Link>
          <Nav.Link href="#pricing">Log In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default navBar

