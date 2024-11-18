import React from "react";
import "cal-sans";
import "./Navbar.css";
import logo from "../../Images/PUBA logo (1) 1 (1).png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="" /></div>
      <div className="navbar-menu">
        <ul className="menu-links">
            <li>SUBMIT PROFILE</li>
          <li>OUR GOALS</li>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
