import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../images2/avatar1.jpg";
import AVATAR2 from "../../images2/avatar2.jpg";
import AVATAR3 from "../../images2/avatar3.jpg";
import AVATAR4 from "../../images2/avatar4.jpg";
import AVATAR5 from "../../images2/avatar5.jpg";
import AVATAR6 from "../../images2/avatar6.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVATAR1,
    name: "Co-Founder",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
  {
    avatar: AVATAR2,
    name: "Home Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
  {
    avatar: AVATAR3,
    name: "AutoCad Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
  {
    avatar: AVATAR4,
    name: "Art Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
  {
    avatar: AVATAR5,
    name: "Graphics Desginer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
  {
    avatar: AVATAR6,
    name: "Flat Drawing Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta quos illum voluptatem ipsam porro repellendus obcaecati nihil a nam aliquam nesciunt, ullam repudiandae aspernatur ratione distinctio repellat enim exercitationem magnam esse eius est. Aperiam sunt ut non id dignissimos.",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="testimonial-container">
        <h1>Testimonial</h1>
      </div>
      <Swiper
        className="testimonial-me"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial-content">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
