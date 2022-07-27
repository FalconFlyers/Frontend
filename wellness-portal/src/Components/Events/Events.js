import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import eve from "./Event-list";

const events = () => {
  const myEve = eve.map((eve) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={eve.photo} />
      <Card.Body>
        <Card.Title>{eve.title}</Card.Title>
        <Card.Text>
          {eve.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
  return <>{myEve}</>;
};

export default events;
