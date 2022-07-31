import React from "react";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Auth from "../Auth/Auth";
import "./PopUp.css";

function PopUp(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>LOGIN</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="auth">
            <Auth />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;