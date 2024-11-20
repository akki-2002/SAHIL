import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import "cal-sans";
import "./Navbar.css";
import logo from "../../Images/PUBA logo (1) 1 (1).png";

const Navbar = ({ onScrollTo }) => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Navigate between routes

  const handleNavigation = (scrollToSection) => {
    if (location.pathname !== "/") {
      // Navigate to home page first
      navigate("/");
      setTimeout(() => {
        scrollToSection(); // Scroll to the desired section after navigation
      }, 100); // Delay to ensure the home page is loaded
    } else {
      // If already on home page, scroll to the section
      scrollToSection();
    }
  };

  return (
    <nav className="navbar">
    {/* PUBA Logo with Home Link */}
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="PUBA Logo" />
    </Link>

    <div className="navbar-menu">
      <ul className="menu-links">
        <li className={location.pathname === "/submit-profile" ? "active" : ""}>
          <Link to="/submit-profile">Submit Profile</Link>
        </li>
        {/* Updated navigation with handleNavigation */}
        <li onClick={() => handleNavigation(onScrollTo.welcome)}>About Us</li>
        <li onClick={() => handleNavigation(onScrollTo.whatWeDo)}>What We Do</li>
        <li onClick={() => handleNavigation(onScrollTo.contactUs)}>Contact Us</li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
