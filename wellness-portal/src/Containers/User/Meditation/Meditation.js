import React from "react";

import "./Meditation.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import medi from "./MeditationList";

const Meditation = () => {
  const myMedi = medi.map((medi) => (
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>
      <div style={{ border: "1px solid black" }}>
        <Card>
          <Card.Img variant="top" src={medi.photo} style={{ minWidth: "450px" }} />
          <Card.Body>
            <Card.Title>
              <h4>{medi.title}</h4>
            </Card.Title>
            <Card.Text style={{ width: "50rem", paddingTop: "1%",margin:"center" }}>
              <b>Description:</b>
              {medi.desc}
            </Card.Text>
            <Card.Text style={{ margin: "center" }}>
              <b>Bookings Available:</b>
              {medi.Book_Avai}
              <br></br>
              Date:{medi.date}
              <br></br>
              Time:{medi.time}
            </Card.Text>

            <Button variant="primary" style={{ margin: "center" }}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  ));
  return <>{myMedi}</>;
};

export default Meditation;
