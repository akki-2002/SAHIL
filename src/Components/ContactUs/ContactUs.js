import React from 'react';
import './ContactUs.css';
import backgroundImage from '../../Images/contactbg.png'; // Adjust path as needed
import Logo from "../../Images/PUBA logo (3) 1.png"; // Replace with the path to your logo file
import textureImg from '../../Images/texture.png'


const ContactUs = () => {
  return (
    // <div className='contactMain'>
    
   

      <div className="contact-container">
      
      {/* Form Section */}
      <div className="form-section">
        <h1>Contact Us</h1>
        <form>
          <div className="name-fields">
            <div>
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Smitherton"
              />
            </div>
          </div>
          <div className="email-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@janesfakedomain.net"
            />
          </div>
          <div className="message-field">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your question or message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="image-section"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
      >
        <div className="logo-overlay">
        <img src={Logo} alt="Puba Productions Logo" className="intro-logo" />
        </div>
      </div>

      
    </div>
    // </div>
    
  );
};

export default ContactUs;
