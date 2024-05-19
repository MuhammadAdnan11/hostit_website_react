import React from "react";
import ServicesCard from "./ServicesCard";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row">
          <div className="col-md-12">
            <div className=" container-service text-center my-5">
              <h3>Our Services</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <ServicesCard />
          </div>
        </div>

        <ServicesCard />
      </div>
    </>
  );
};

export default Services;
