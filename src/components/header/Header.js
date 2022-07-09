import React from "react";
import "./header.css";
import Logo from "../../images2/house-logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
