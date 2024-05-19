import React from "react";
import "./Pricing.css";
const Pricing_Card = () => {
  return (
    <>
      <div className="combined-pricingCard text-center ">
        <div className="Pricing-card text-center text-black">
          <div className="Pricing-header mt-3">
            <h1>
              <span id="dollor-icon">$ </span>49
            </h1>
            <h5> STARTUP</h5>
          </div>
          <div className="detail-section ">
            <p>
              2GB RAM <br />
              20GB SSD Cloud Storage <br />
              Weekly Backups
              <br /> DDoS Protection <br />
              Full Root Access <br />
              24/7/365 Tech Support
            </p>
          </div>
        </div>
        <button className="btn-Pricing mt-3">See Detail</button>
      </div>
    </>
  );
};

export default Pricing_Card;
