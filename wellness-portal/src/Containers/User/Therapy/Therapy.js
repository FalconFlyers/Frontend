import React from "react";

import "./Therapy.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ther from "./TherapyList";

const Therapy = () => {
  const myTher = ther.map((ther) => (
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>
      <div style={{ border: "1px solid black" }}>
        <Card>
          <Card.Img variant="top" src={ther.photo} style={{ minWidth: "450px" }} />
          <Card.Body>
            <Card.Title>
              <h4>{ther.title}</h4>
            </Card.Title>
            <Card.Text style={{ width: "50rem", paddingTop: "1%",margin:"center" }}>
              <b>Description:</b>
              {ther.desc} 
            </Card.Text>
            <Card.Text style={{ margin: "center" }}>
              <b>Bookings Available:</b>
              {ther.Book_Avai}
              <br></br>
              Date:{ther.date}
              <br></br>
              Time:{ther.time}
            </Card.Text>

            <Button variant="primary" style={{ margin: "center" }}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  ));
  return <>{myTher}</>;
};

export default Therapy;
