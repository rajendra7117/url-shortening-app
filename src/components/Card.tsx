//@ts-ignore
import React from "react";
import "./Card.scss";
// import * as logo from '../images/icon-brand-recognition.svg'

const Card: React.FC<{ img: string; heading: string; text: string }> = ({
  img,
  heading,
  text,
}) => {
  return (
    <div className="card">
      <div className="img-div">
        <img src={img} />
      </div>

      <h3>{heading}</h3>
      <p>{text}</p>
    <span className="line"></span>
    </div>
  );
};

export default Card;
