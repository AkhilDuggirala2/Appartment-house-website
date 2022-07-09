/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import Image1 from "../../images2/background1.jpg";
import Image2 from "../../images2/background2.jpg";
import Image3 from "../../images2/background3.jpg";
import Image4 from "../../images2/background4.jpg";
import Image5 from "../../images2/background5.jpg";
import Image6 from "../../images2/background6.jpg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "New Appartment House",
  },
  {
    id: 2,
    image: Image2,
    title: "New Appartment House",
  },
  {
    id: 3,
    image: Image3,
    title: "New Appartment House",
  },
  {
    id: 4,
    image: Image4,
    title: "New Appartment House",
  },
  {
    id: 5,
    image: Image5,
    title: "New Appartment House",
  },
  {
    id: 6,
    image: Image6,
    title: "New Appartment House",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-item">
        {data.map(({ id, image, title }) => {
          return (
            <div key={id} className="portfolio-content">
              <div className="portfolio-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-btn">
                <a href="#" className="btn">
                  Book Now
                </a>
                <a href="#" className="btn">
                  View More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
