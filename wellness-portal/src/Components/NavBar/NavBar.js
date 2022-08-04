import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import PopUp from "../PopUp/PopUp";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LogOut from "../Log/LogOut";


const NavBar = (props) => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const changedLogging = props.changedLogging;

  return !props.isLogged ? (
    <Nav>
      <logo>
        <img src={process.env.PUBLIC_URL + "images/BWY.png"} />
      </logo>
      <ul class="topnav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <button onClick={handleShow} >Login</button>
          <PopUp
            show={show}
            handleClose={handleClose}
            changedLogging={changedLogging}
          />
        </li>
      </ul>
    </Nav>
  ) : (
    <Nav>
      <logo>
        <img src={process.env.PUBLIC_URL + "images/BWY.png"} />
      </logo>
      <ul class="topnav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <LogOut changedLogging={changedLogging}/>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
