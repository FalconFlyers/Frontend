import React from "react";
import "./Yoga.css";
import Card from "react-bootstrap/Card";
import yoga from "./Yoga-list";

const Yoga = () => {
  const myYoga = yoga.map((yoga) => (
    <>
      <Card className="yoga">
        <card-img>
          <Card.Img variant="top" src={yoga.photo} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{yoga.title}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description: </b>
            {yoga.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available: </b>
            {yoga.Book_Avai}
            <br></br>
            Date: {yoga.date}
            <br></br>
            Time: {yoga.time}
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
            "Yoga happens beyond the mat,<br></br> Anything you do with attention to how you feel is doing Yoga"
            </i>
          </h5>
        </div>
        <h3>Book Your Yoga Event</h3>
      </div>
      {myYoga}
    </>
  );
};

export default Yoga;
