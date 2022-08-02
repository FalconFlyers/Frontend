import React from "react";

import "./Therapy.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ther from "./TherapyList";

const Therapy = () => {
  const myTher = ther.map((ther) => (
    
    <>
      
        <Card className="therapy">
          <Card.Img variant="top" src={ther.photo}  />
          <Card.Body>
            <Card.Title>
              <h4>{ther.title}</h4>
            </Card.Title>
            <Card.Text >
              <b>Description:</b>
              {ther.desc} 
            </Card.Text>
            <Card.Text >
              <b>Bookings Available:</b>
              {ther.Book_Avai}
              <br></br>
              Date:{ther.date}
              <br></br>
              Time:{ther.time}
            </Card.Text>

            <Button variant="primary">
              Book Now
            </Button>
          </Card.Body>
        </Card>
    
    </>
  ));
  return <>
  <div className="text">
        <div>
          <h5>
            <i>
            "Mental strength is not the ability to stay out of the dark,<br></br> 
            It's the ability to sit present in the darkness knowing that the light will shine again"
            </i>
          </h5>
        </div>
        <h3>Book Your Therapy Event</h3>
      </div>
  {myTher}
  </>;
};

export default Therapy;
