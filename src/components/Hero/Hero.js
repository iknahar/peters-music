import React from 'react';
import bg from '../../images/bg.jpg'
import "./Hero.css";

const Hero = () => {
    return (
      <div
        className="background"
        style={{ background: `url(${bg})`, backgroundAttachment: "fixed" }}
      >
        <div className="herotext">
          <h1 className='large'>Ready To Play</h1>
          <p className='py-4'>
            It was founded 1905 and existed up to 1939. The fabrication was
            located in Warschauerstraße 70 and Boxhagenerstraße 16a in Berlin.
            The owners Paul Richard Bogs (1871-1949) and Adolf Ernst Voigt were
            awarded an imperial and royal warrant of appointment to the courts
            of Austria-Hungary and Spain. Voigt left the company in 1913, Bogs
            went on until the company was closed in 1939. The company built
            about 66.000 instruments.
          </p>
        </div>
      </div>
    );
};

export default Hero;