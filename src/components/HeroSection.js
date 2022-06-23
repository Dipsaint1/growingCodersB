import React from 'react';
import image from "../images/home-image.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <img className="herosection-image" src={image} alt="" />
    </div>
  )
}

export default HeroSection