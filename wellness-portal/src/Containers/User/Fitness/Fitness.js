import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Fitness.css";
import Card from "react-bootstrap/Card";
import fit from "./FitnessList";


const apiUrl = `http://localhost:8080/api/v1/events/type/fitness`
const Fitness = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setPost(response.data);
    })
  }, [setPost]);
  // const myYoga = yoga.map((yoga) => (
    const myFit = post.map((post) => (
    <>
      <Card className="fitness">
        <card-img>
          <Card.Img variant="top" src={post.image} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{post.name}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description: </b>
            {post.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available: </b>
            {post.capacity}
            {/* <br></br>
            Date: {yoga.date}
            <br></br>
            Time: {yoga.time} */}
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
              "Exercise not only changes your body, it changes your mind ,your
              attitude and your mood. "
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