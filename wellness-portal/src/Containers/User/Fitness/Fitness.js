import React from "react";

import "./Fitness.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fit from "./FitnessList";

const Fitness = () => {
  const myFit = fit.map((fit) => (
    // <Card style={{ width: "20rem",flexDirection:"row"}}>
    <>
      <div style={{ border: "1px solid black" }}>
        <Card>
          <Card.Img variant="top" src={fit.photo} style={{ width: "400px" }} />
          <Card.Body>
            <Card.Title>
              <h4>{fit.title}</h4>
            </Card.Title>
            <Card.Text style={{ width: "50rem", paddingTop: "1%" }}>
              <b>Description:</b>
              {fit.desc}
            </Card.Text>
            <Card.Text style={{ margin: "center" }}>
              <b>Bookings Available:</b>
              {fit.Book_Avai}
              <br></br>
              Date:{fit.date}
              <br></br>
              Time:{fit.time}
            </Card.Text>

            <Button variant="primary" style={{ margin: "center" }}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  ));
  return <>{myFit}</>;
};

export default Fitness;
