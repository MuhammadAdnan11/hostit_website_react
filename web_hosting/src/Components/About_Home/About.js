import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row  ">
          <div className="col-md-6 about-txt ">
            <h3>About Us</h3>
            <p>
              Words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
            </p>
            <button>Read More</button>
          </div>
          <div className="col-md-6  about-img">
            <img src="./images/about-img.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
