import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="foot px-5">
      <div className="d-flex align-items-center justify-content-between">
        <div className="footerP">
          <h4>Peter's Music School</h4>
          <p>
            Address: Dhaka, Bangladesh, Bottola, Music School Goli
          </p>
        </div>

        <div className="footerP">
          <p>
            Check about out students and teachers. Music has always been in our
            soul and we are trying to spread it since 1988.
          </p>
        </div>
        <div className="footerP">
          Visit us for more info, or follow us on social media, Admission going
          on! So hurry up!
        </div>
      </div>
      <p className="right">All right reserve © 2021</p>
    </div>
  );
};

export default Footer;
