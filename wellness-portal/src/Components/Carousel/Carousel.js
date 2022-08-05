import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import "./Carousel.css";

const Header = () => {
  return (
    <Carousel className="header">
      <Carousel.Item>
          <img src={pic4} alt="First slide" />
        <Carousel.Caption>
          <h3>Yoga to start a brand new day</h3>
          <p>Improve your strength, balance, flexibility and agility.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic2} alt="First slide" />
        <Carousel.Caption>
          <h3>Fitness Everyday</h3>
          <p>Stretch your body to enable your muscles work effectively.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic3} alt="First slide" />
        <Carousel.Caption>
          <h3>Every Moment of Mindfulness</h3>
          <p>Increase your EQ, and decrease your Anxiety !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h3>Push Up Challenge Day</h3>
          <p>Ready to burn some calories?? Lets make fit your upper body today!! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
};

export default Header;
