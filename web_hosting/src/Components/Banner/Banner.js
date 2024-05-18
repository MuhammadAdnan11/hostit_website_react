import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="container-fluid banner-container">
        <div className="row ">
          <div className="col-md-6 text-white">
            <h1>
              Fast & Secure <br />
              Web Hosting
            </h1>
            <p>
              Anything embarrassing hidden in the middle of text. All the Lorem
              Ipsuanything embarrassing hidden in the middle of text. All the
              Lorem Ipsumm
            </p>
            <div className="row">
              <div className="col-md-5 btn_banner_ReadMore">
                <button>Read More</button>
              </div>
              <div className="col-md-5 btn_banner_ContactUs">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
