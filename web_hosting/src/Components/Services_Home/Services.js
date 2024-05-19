import React from "react";
import ServicesCard from "./ServicesCard";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="container-fluid mt-4 mainCard-container">
        <div className="row">
          <div className="col-md-12">
            <div className=" container-service text-center my-5">
              <h3 className="fw-bold">Our Services</h3>
            </div>
          </div>
        </div>
      </div>

      {/* cards  */}
      <div className="container mb-5 card-container">
        <div className="row text-center justify-content-space-between mb-4">
          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s1.png"
              title="Shared Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>

          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s2.png"
              title="Dedicated Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>

          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s3.png"
              title="Cloud Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>
        </div>

        <div className="row text-center justify-content-space-between ">
          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s1.png"
              title="Shared Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>

          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s2.png"
              title="Dedicated Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>

          <div className="col-md-4 ">
            <ServicesCard
              image="./images/s3.png"
              title="Cloud Hosting"
              details="Generators on the Internet tend to repeat predefined chunks as
            necessary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
