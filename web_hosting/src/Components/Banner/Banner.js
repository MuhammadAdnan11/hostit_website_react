import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="container-fluid banner-container">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 text-white  mt-5 pt-5 main-banner">
              <h2 className="mt-5 pt-3">
                Fast & Secure <br />
                Web Hosting
              </h2>
              <p className="mt-4">
                Anything embarrassing hidden in the middle of text. All the
                Lorem Ipsuanything embarrassing hidden in the middle of text.
                All the Lorem Ipsumm
              </p>
              <div className="row mt-4 ">
                <div className="col-md-4 btn_banner_ReadMore">
                  <button>Read More</button>
                </div>
                <div className="col-md-4 btn_banner_ContactUs">
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4  banner_img">
              <img src="./images/slider-img.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
