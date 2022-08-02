import React from "react";
import './Section1.scss'
const img: string = require("../images/illustration-working.svg").default;
const section1 = () => {
  return (
    <div className="section-1">
      <div className="part-1">
        <h1>
          More than just <br /> shorter links
        </h1>
        <p>
          Build your brans recognition and get detailed <br /> insights on how
          your links are performing
        </p>
        <button>Get Started</button>
      </div>
      <div className="part-2">
        <img src={img}/>
      </div>
    </div>
  );
};

export default section1;
