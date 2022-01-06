import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/bg.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="background"
      style={{ background: `url(${bg})`, backgroundAttachment: "fixed" }}
    >
      <div className="herotext">
        <h1 className="large">Ready To Play</h1>
        <p className="py-4">
          It was founded 1905. The fabrication was
          located in Warschauer and Boxhagenerstraße 16a in Berlin. The
          owners Paul Richard Bogs and Adolf Ernst Voigt were
          awarded an imperial and royal warrant of appointment to the courts of
          Austria-Hungary and Spain. 
        </p>
        <Link className="btnHero" to="/about">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
