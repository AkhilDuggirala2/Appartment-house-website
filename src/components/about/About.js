/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../images2/me.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <h1>About Me</h1>
      </div>
      <div className="about-me">
        <div className="about-me-image">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non
            animi quibusdam autem eos quaerat quia tempore porro, aliquam natus
            adipisci quae quod ea ut fugit, debitis blanditiis reprehenderit.
            Veritatis nesciunt ducimus natus sed odio. Nobis, facilis nisi
            voluptate omnis illo rem sed fugiat at, ad numquam similique, illum
            iure?
          </p>
          <div className="about-readmore">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default About;
