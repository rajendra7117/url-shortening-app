import React from "react";
import "./Section3.scss";
import Card from "./Card";
const logo: string = require("../images/icon-brand-recognition.svg").default;
const logo2: string = require("../images/icon-fully-customizable.svg").default;
const logo3: string = require("../images/icon-detailed-records.svg").default;

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
        <Card
          img={logo}
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content."
        />
         <span className="line"></span>
        <Card
          img={logo2}
          heading="Detailed Records"
          text=" Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions."
        />
       <span className="line"></span>
        <Card
          img={logo3}
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
};

export default Section3;
