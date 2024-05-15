import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">HOSTIT</a>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
