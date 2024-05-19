import React from "react";
import "./Pricing.css";
const Pricing_Card = (props) => {
  return (
    <>
      <div className="combined-pricingCard text-center ">
        <div className="Pricing-card text-center text-black">
          <div className="Pricing-header mt-3">
            <h1>
              <span id="dollor-icon">$ </span>
              {props.price}
            </h1>
            <h5>{props.title}</h5>
          </div>
          <div className="detail-section ">
            {/* <p>
              2GB RAM <br />
              20GB SSD Cloud Storage <br />
              Weekly Backups
              <br /> DDoS Protection <br />
              Full Root Access <br />
              24/7/365 Tech Support
            </p> */}
            <ul className="list-unstyled">
              <li>{props.li1}</li>
              <li>{props.li2}</li>
              <li>{props.li3}</li>
              <li>{props.li4}</li>
              <li>{props.li5}</li>
              <li>{props.li6}</li>
            </ul>
          </div>
        </div>
        <button className="btn-Pricing mt-3 text-center me-4">
          See Detail
        </button>
      </div>
    </>
  );
};

export default Pricing_Card;
