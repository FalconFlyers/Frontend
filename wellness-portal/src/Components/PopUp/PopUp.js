import React from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Auth from '../Auth/Auth';
import './PopUp.css';

function PopUp(props) {
  
  
  return (
    <>
      

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
          
         
        </Modal.Header>
        <Modal.Body><div className="auth">
        
        <Auth/> 
        
  
      </div></Modal.Body>
      
       
        {/* <Modal.Footer> */}
          {/* <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button> */}
          
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PopUp;

