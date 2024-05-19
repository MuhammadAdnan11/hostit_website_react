import React from "react";
import "./Pricing.css";
import Pricing_Card from "./Pricing_Card";
const Pricing = () => {
  return (
    <>
      <div className="container  px-5  my-5">
        <div className="row ">
          <div className="col-md-12 text-center ">
            <h2 className="fw-bold">Our Pricing</h2>
          </div>
        </div>
        <div className="row mt-5 row-PricingCard ps-5  ">
          <div className="col-md-4 mainCard-pricing">
            <Pricing_Card
              title="STARTUP"
              price="49"
              li1="2GB RAM"
              li2="combined-pricingCard"
              li3="Weekly Backups"
              li4="DDoS Protection"
              li5="Full Root Access"
              li6="24/7/365 Tech Support"
            />
          </div>
          <div className="col-md-4  mainCard-pricing">
            <Pricing_Card
              title="BUSINESS"
              price="149"
              li1="2GB RAM"
              li2="combined-pricingCard"
              li3="Weekly Backups"
              li4="DDoS Protection"
              li5="Full Root Access"
              li6="24/7/365 Tech Support"
            />
          </div>
          <div className="col-md-4  mainCard-pricing">
            <Pricing_Card
              title="STANDARD"
              price="68"
              li1="2GB RAM"
              li2="combined-pricingCard"
              li3="Weekly Backups"
              li4="DDoS Protection"
              li5="Full Root Access"
              li6="24/7/365 Tech Support"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
