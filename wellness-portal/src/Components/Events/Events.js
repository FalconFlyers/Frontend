import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import event from "./EventList";
import "./Events.css"

const events = () => {
  const eventList = event.map((event) => (
    event.position === "left" ?
    (<Card>
      <card-img>
      <Card.Img variant="top" src={event.photo} />  
      </card-img>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>) : (
      <Card>
        <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <card-img>
      <Card.Img variant="top" src={event.photo} />  
      </card-img>
    </Card>
    )
  ));
  return <>{eventList}</>;
};

export default events;
