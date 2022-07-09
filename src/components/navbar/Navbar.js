/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { RiServiceLine } from "react-icons/ri";
import { GiRamProfile } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div className="nav-items">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <FaHome className="navitems-icon" />
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <FiUser className="navitems-icon" />
              About
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={() => setActiveNav("#blog")}
              className={activeNav === "#blog" ? "active" : ""}
            >
              <ImBlog className="navitems-icon" />
              Blog
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setActiveNav("#services")}
              className={activeNav === "#services" ? "active" : ""}
            >
              <RiServiceLine className="navitems-icon" />
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActiveNav("#portfolio")}
              className={activeNav === "#portfolio" ? "active" : ""}
            >
              <GiRamProfile className="navitems-icon" />
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={() => setActiveNav("#testimonial")}
              className={activeNav === "#tesitimonial" ? "active" : ""}
            >
              <FaUserFriends className="navitems-icon" />
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <TiContacts className="navitems-icon" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
