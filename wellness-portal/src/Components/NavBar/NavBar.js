import React, { useState } from "react";
// import { useState } from 'react-hook-use-state';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import PopUp from "../PopUp/PopUp";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const NavBar = (props) => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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
          <Link className="yes" to="/home">Home</Link>
          <Link className="yes" to="/admin">Admin</Link>
          <Link to="/login">
            <Button style={{ marginLeft: 850 }} onClick={handleShow}>
              LOGIN
            </Button>
          </Link>
          <PopUp show={show} handleClose={handleClose} setShow={setShow} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
