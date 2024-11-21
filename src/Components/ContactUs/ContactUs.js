import React, { useState } from 'react';
import './ContactUs.css';
import backgroundImage from '../../Images/contactbg.png'; // Adjust path as needed
import Logo from "../../Images/PUBA logo (3) 1.png"; // Replace with the path to your logo file

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(''); // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple clicks
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwSgTMRhvLn6SMFPtwxo-CrxcxAzUQE9lSwSSkxO9M3DsYp7ovF_DTz-7Q0FPp57Q38jw/exec'; // Replace with your Google Script URL
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        setFormStatus("Form submitted successfully!");
        form.reset(); // Reset the form
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setFormStatus('An error occurred. Please try again.');
      })
      .finally(() => {
        setTimeout(() => {
          setFormStatus("Explore More about PUBA...");
          setIsSubmitting(false); // Re-enable the submit button
        }, 3000); // Reduced delay for message clearing
      });
  };

  return (
    <div className="contact-container">
      {/* Form Section */}
      <div className="form-section">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div>
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                name="FirstName"
                placeholder="Jane"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                name="LastName"
                placeholder="Smitherton"
                required
              />
            </div>
          </div>
          <div className="email-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="email@janesfakedomain.net"
              required
            />
          </div>
          <div className="message-field">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="YourMessage"
              placeholder="Enter your question or message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Thank You!' : 'Submit'}
          </button>
        </form>

        {/* Feedback Message */}
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>

      {/* Image Section */}
      <div
        className="image-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="logo-overlay">
          <img src={Logo} alt="Puba Productions Logo" className="intro-logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
