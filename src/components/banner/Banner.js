import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1>Building Appartment House</h1>
      <h3>This is the Appartment Houses in New Desginer.</h3>

      <div className="banner-button">
        <a href="#" className="banner-text">
          Booking Now
        </a>
        <a href="#contact" className="banner-join">
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
