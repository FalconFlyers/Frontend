import React from "react";

import "./Mindfulness.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mind from "./MindfulnessList";

const Mindfulness = () => {
  const myMind = mind.map((mind) => (
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>
      <div style={{ border: "1px solid black" }}>
        <Card>
          <Card.Img variant="top" src={mind.photo} style={{ minWidth: "450px" }} />
          <Card.Body>
            <Card.Title>
              <h4>{mind.title}</h4>
            </Card.Title>
            <Card.Text style={{ width: "50rem", paddingTop: "1%",margin:"center" }}>
              <b>Description:</b>
              {mind.desc}
            </Card.Text>
            <Card.Text style={{ margin: "center" }}>
              <b>Bookings Available:</b>
              {mind.Book_Avai}
              <br></br>
              Date:{mind.date}
              <br></br>
              Time:{mind.time}
            </Card.Text>

            <Button variant="primary" style={{ margin: "center" }}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  ));
  return <>{myMind}</>;
};

export default Mindfulness;
