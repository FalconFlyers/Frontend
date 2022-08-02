import React from "react";

import "./Meditation.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import medi from "./MeditationList";

const Meditation = () => {
  const myMedi = medi.map((medi) => (
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>
      <Card className="medi">
        <Card.Img
          variant="top"
          src={medi.photo}
         
        />
        <Card.Body>
          <Card.Title>
            <h4>{medi.title}</h4>
          </Card.Title>
          <Card.Text
            
          >
            <b>Description:</b>
            {medi.desc}
          </Card.Text>
          <Card.Text >
            <b>Bookings Available:</b>
            {medi.Book_Avai}
            <br></br>
            Date:{medi.date}
            <br></br>
            Time:{medi.time}
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
        <h3>Book Your Meditation Event</h3>
      </div>
      {myMedi}
    </>
  );
};

export default Meditation;
