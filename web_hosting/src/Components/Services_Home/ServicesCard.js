import React from "react";
import "./Services.css";
const ServicesCard = (props) => {
  return (
    <>
      <div id="box">
        <div className="img-box mt-4 ">
          <img src={props.image} />
        </div>
        <div className="detail-box mt-3 mb-4 px-3">
          <h4>{props.title}</h4>
          <p>{props.details}</p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
