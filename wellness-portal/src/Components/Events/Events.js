import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import event from "./EventList";
import "./Events.css"

const events = () => {
  const eventList = event.map((event) => (
    event.position === "left" ?
    (<Card className="cards">
      <card-img>
      <Card.Img variant="top" src={event.photo} />  
      </card-img>
      <Card.Body>
        <Card.Title><h3>{event.title}</h3></Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary">Book Event</Button>
      </Card.Body>
    </Card>) : (
      <Card className="cards">
        <Card.Body>
        <Card.Title><h3>{event.title}</h3></Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary">Book Event</Button>
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
