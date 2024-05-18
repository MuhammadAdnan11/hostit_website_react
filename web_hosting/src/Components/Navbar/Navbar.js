import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row  nav-row bg-dark">
          <div className="col-md-12  main-navbar ">
            <ul className=" gap-4 list-unstyled text-white ">
              <li>
                <a href="#">Hostit</a>
              </li>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
