import React from "react";

import "./Mindfulness.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mind from "./MindfulnessList";

const Mindfulness = () => {
  const myMind = mind.map((mind) => (
    <>
   
        <Card className="mind">
          <Card.Img
            variant="top"
            src={mind.photo}
            
          />
          <Card.Body>
            <Card.Title>
              <h4>{mind.title}</h4>
            </Card.Title>
            <Card.Text
            
            >
              <b>Description:</b>
              {mind.desc}
            </Card.Text>
            <Card.Text >
              <b>Bookings Available:</b>
              {mind.Book_Avai}
              <br></br>
              Date:{mind.date}
              <br></br>
              Time:{mind.time}
            </Card.Text>

            <Button variant="primary" >
              Book Now
            </Button>
          </Card.Body>
        </Card>
    
    </>
  ));
  return (
    <>
      <div className="text">
        <div>
          <h5>
            <i>
              "The mind is definitely something that can be transformed,
              <br></br>
              And meditation is a means to transform it"
            </i>
          </h5>
        </div>
        <h3>Book Your Mindfulness Event</h3>
      </div>
      
      {myMind}
    </>
  );
};

export default Mindfulness;
