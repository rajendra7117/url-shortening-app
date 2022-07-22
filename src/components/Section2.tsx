import React, { useState } from "react";
import Form from "./Form";
import UrlContainer from "./UrlContainer";

import "./Section2.scss";
const Section2 = () => {
  return (
    <div className="section-2">
      <div className="form-div">
        
        <Form />
      </div>
      <UrlContainer />
    </div>
  );
};

export default Section2;
