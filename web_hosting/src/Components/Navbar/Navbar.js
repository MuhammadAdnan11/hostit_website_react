import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row  nav-row ">
          <div className="col-md-12   main-navbar ">
            <ul className=" gap-5 list-unstyled text-white ">
              <li>
                <a href="#">Hostit</a>
              </li>

              <li>Home</li>

              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact Us</li>
              <li>
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i class="fa-solid fa-phone pe-1"></i> Call :+923169727859
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
