import React from "react";
import "./Pricing.css";
import Pricing_Card from "./Pricing_Card";
const Pricing = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Our Pricing</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4  mainCard-pricing">
            <Pricing_Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
