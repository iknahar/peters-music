import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const navStyle = {
      textDecoration: "none",
      color: "white",
      margin: "0 20px",
    };
    const activeSty = {
      color: "skyblue",
        fontWeight: "bold",
    };
  return (
    <div className="header d-flex align-items-center bg-dark p-3 justify-content-between px-5">
      <h5 className="text-white">Peter's Music School</h5>
      <nav className="topnavbar">
        <NavLink style={navStyle} activeStyle={activeSty} to="/home">
          Home
        </NavLink>
        <NavLink style={navStyle} activeStyle={activeSty} to="/services">
          Services
        </NavLink>
        <NavLink style={navStyle} activeStyle={activeSty} to="/about">
          About
        </NavLink>
        <NavLink style={navStyle} activeStyle={activeSty} to="/contact">
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
