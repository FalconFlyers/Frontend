import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="social-container">
      <div style={{ paddingTop: "2%", color: "#00008B" }}>
        <a href="https://www.youtube.com" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <h3 className="foot">
        <i>"Relaxation is the stepping stone to Tranquility"</i>
      </h3>
    </div>
  );
}
