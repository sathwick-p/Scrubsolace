import React from "react";
import "./About.css";
import geetikapic2 from "./geetikapic2.jpg";
import sankalppic from "./sankalppic.png";
import Box1 from "./Box1";
function About() {
  var theCircle = <Box1 bgColor="#F9C240" />;
  return (
    <div>
      <div className="banner-area">
        <div className="content-area">
          <div className="content">
            <h1 className="titleStyle">About Scrubsolace.</h1>
            <h2 className="titleStyle2">Personalised Scrubs</h2>
            <button className="browse_products">BROWSE PRODUCTS</button>
          </div>
          <br />
        </div>
        <h2 className="teamStyle">Team</h2>
        <div className="box" className="styles">
          <Box1 image={geetikapic2} names="Geetika" desgn="Owner" />
          <Box1 image={sankalppic} names="Sankalp" desgn="Developer" />
          <Box1 image={geetikapic2} names="Sathwick" desgn="Developer" />
          <Box1 image={geetikapic2} names="Sarang" desgn="Developer" />
        </div>
      </div>
    </div>
  );
}

export default About;
