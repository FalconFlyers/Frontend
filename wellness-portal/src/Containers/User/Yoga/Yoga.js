import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Yoga.css";
import Card from "react-bootstrap/Card";
import yoga from "./Yoga-list";

//const apiUrl = `http://localhost:8080/api/v1/events/all`
const apiUrl = `http://localhost:8080/api/v1/events/type/yoga`
const Yoga = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setPost(response.data);
    })
  }, [setPost]);
  // const myYoga = yoga.map((yoga) => (
    const myYoga = post.map((post) => (
    <>
      <Card className="yoga">
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
            "Yoga happens beyond the mat, Anything you do with attention to how you feel is doing Yoga"
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
