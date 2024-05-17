import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row header_banner ">
            <div className="col-md-5 header_text">
              <h1>
                Fast & Secure
                <br /> Web Hosting
              </h1>
              <br />
              <p>
                Anything embarrassing hidden in the middle of text. All the
                Lorem <br />
                Ipsuanything embarrassing hidden in the middle of text. All the
                Lorem Ipsumm
              </p>
              <div className="row banner_text_button">
                <div className="col-md-5 readMoreBtn">
                  <button>Read More</button>
                </div>
                <div className="col-md-5 contactUsBtn">
                  <button>Contact Us</button>
                </div>
              </div>
            </div>

            <div className="col-md-5 banner_img ">
              {" "}
              <img src="./images/slider-img.png" alt="banner "></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
