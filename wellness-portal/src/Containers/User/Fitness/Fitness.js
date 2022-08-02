import React from "react";
import "./Fitness.css";
import Card from "react-bootstrap/Card";
import fit from "./FitnessList";

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
            <b>Bookings Available: </b>
            {fit.Book_Avai}
            <br></br>
            Date: {fit.date}
            <br></br>
            Time: {fit.time}
          </Card.Text>

          <button variant="primary">Book Now</button>
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
              "Exercise not only changes your body, it changes your mind
              ,your attitude and your mood. "
            </i>
          </h5>
        </div>
        <h3>Book Your Fitness Event</h3>
      </div>
      {myFit}
    </>
  );
};

export default Fitness;
