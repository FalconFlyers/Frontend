import React from "react";
import "./MyEvents.css";
import Card from "react-bootstrap/Card";
import fit from "./MyEventsList";

const Fitness = () => {
  const myFit = fit.map((fit) => (
    <>
      <Card className="fitness">
        <card-img>
          <Card.Img variant="top" src={fit.photo} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{fit.title}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description: </b>
            {fit.desc}
          </Card.Text>
          <Card.Text>
            Date: {fit.date}
            <br></br>
            Time: {fit.time}
          </Card.Text>
          <button variant="primary">Cancel</button>
        </Card.Body>
      </Card>
    </>
  ));
  return (
    <>
      <div className="text">
        <h2>My Events</h2>
      </div>
      {myFit}
    </>
  );
};

export default Fitness;
