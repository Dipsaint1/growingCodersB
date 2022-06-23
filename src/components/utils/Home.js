import React from 'react';
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import "../../App.css";
import image from "../../images/Rectangle.png"

function Home() {
  return (
    <main>
      <img className="main-image" src={image} alt="" />
      <Navbar />
      <HeroSection />
    </main>
  )
}


export default Home;