import React from "react";
import "./Services.css";
const ServicesCard = () => {
  return (
    <>
      <div className="container  ">
        <div className="row ">
          <div className="col-md-4">
            <div className="box text-center d-block my-4">
              <div className="img-box mt-4">
                <img src="./images/s1.png" />
              </div>
              <div className="detail-box mt-3 mb-4 ">
                <h4>Shared Hosting</h4>
                <p>
                  Generators on the Internet tend to repeat predefined chunks as
                  necessary
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
