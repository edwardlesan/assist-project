import React from "react";
import HeroImg from "./img/hero_img.svg";
import "../components/Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">DocScanner</h1>
          <p className="hero-subtitle">
            Free online platform which offers the possibility to scan any
            document and automatically fill the necessary form.
          </p>
          <button className="hero-button">Try it now</button>
        </div>
        <img src={HeroImg} alt="Hero Image"></img>
      </div>
    </>
  );
}

export default Hero;
