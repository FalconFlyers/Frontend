import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import "./Carousel.css";
import { useEffect, useState } from "react";
import axios from "axios";


const apiUrl = `http://localhost:8080/api/v1/upcomingevents`



const Header = () => {
  const [post, setPost] = useState([]);
useEffect(() => {
  axios.get(apiUrl).then((response) => {
    setPost(response.data);
  })
  }, [setPost]);

  const UpcomingEvents = post.map((event)=>(
    <Carousel.Item>
        <img src={event.image_link} alt="Could not load image"/>
        <Carousel.Caption>
        <h3>{event.name}</h3>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <p>{event.desc}</p>
        </Carousel.Caption>
        </Carousel.Item>
  ))
  return (
    <Carousel className="header">{UpcomingEvents}</Carousel>
  );
  
};

export default Header;

/* <Carousel className="header">
      <Carousel.Item>
          <img src={pic4} alt="First slide" />
        <Carousel.Caption>
          <h3 className="car">Yoga to start a brand new day</h3>
          <p className="car">Improve your strength, balance, flexibility and agility.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="car">Fitness Everyday</h3>
          <p className="car">Stretch your body to enable your muscles work effectively.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="car">Every Moment of Mindfulness</h3>
          <p className="car">Increase your EQ, and decrease your Anxiety !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="car">Push Up Challenge Day</h3>
          <p className="car">Ready to burn some calories?? Lets make fit your upper body today!! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
};
*/
