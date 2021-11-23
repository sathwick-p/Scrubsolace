import React from "react";
import "./Box1.css";
function Box1({ image, names, desgn }) {
  return (
    <div className="boxStyle">
      <div className="circleStyle">
        <img src={image} className="picStyle" />
      </div>
      <h3 className="nameStyle">{names}</h3>
      <h6 className="desgnStyle">{desgn}</h6>
    </div>
  );
}

export default Box1;



