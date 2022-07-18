import React from "react";
import "./Section3.scss";
import Card from "./Card";
const Section3 = () => {
  return (
    <div className="section-3">
      <div className="part-1">
        <h1>Advanced statistics</h1>
        <p>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard
        </p>
      </div>
      <div className="part-2">
        <Card />
        {/* <div className="card-1">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card-2">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card-3">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Section3;
