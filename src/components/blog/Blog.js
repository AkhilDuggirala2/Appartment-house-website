/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./blog.css";
import IMG1 from "../../images2/sofa.jpg";
import IMG2 from "../../images2/sofa1.jpg";
import IMG3 from "../../images2/sofa2.jpg";

const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <h1>Blog</h1>
      </div>
      <div className="blog-me">
        <div className="blog-image">
          <img src={IMG1} alt="Blog Image" />
          <h3 className="blog-header"> New Hall Room</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum
            culpa nesciunt corporis doloremque repudiandae quae exercitationem
            soluta sunt ipsum?
          </p>
        </div>
        <div className="blog-image">
          <img src={IMG2} alt="Blog Image" />
          <h3 className="blog-header"> New Hall Room</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum
            culpa nesciunt corporis doloremque repudiandae quae exercitationem
            soluta sunt ipsum?
          </p>
        </div>
        <div className="blog-image">
          <img src={IMG3} alt="Blog Image" />
          <h3 className="blog-header"> New Hall Room</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum
            culpa nesciunt corporis doloremque repudiandae quae exercitationem
            soluta sunt ipsum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
