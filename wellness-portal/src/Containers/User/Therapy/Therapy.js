import React from "react";
import "./Therapy.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = `http://localhost:8080/api/v1/events/type/Therapy`
const Therapy = () => {
  const [ther, setTher] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setTher(response.data);
    })
  }, [setTher]);


  const myTher = ther.map((ther) => (
    <>
      <Card className="therapy">
        <card-img>
          <Card.Img variant="top" src={ther.img_Link} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{ther.title}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description:</b>
            {ther.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available:</b>
            {ther.Book_Avai}
            <br></br>
            Date:{ther.date}
            <br></br>
            Time:{ther.time}
          </Card.Text>
          <Button variant="primary">Book Now</Button>
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
              "Mental strength is not the ability to stay out of the dark, It's
              the ability to sit present in the darkness knowing that the light
              will shine again"
            </i>
          </h5>
        </div>
        <h3>Book Your Therapy Event</h3>
      </div>
      {myTher}
    </>
  );
};

export default Therapy;
