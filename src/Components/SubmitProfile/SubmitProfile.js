import React from "react";
import "./SubmitProfile.css";
import img from "../../Images/submitProfile.jpg";
import Footer from "../Footer/Footer";
import { useState } from "react";

const SubmitProfile = () => {


  return (
    <div>
    <div className="submit-profile-container">
      {/* Form Section */}
      <div className="form-section1">
        <h1>Submit Profile</h1>
        <form className="profile-form"  >
          <h2>Personal Information</h2>
          <div className="form-group">
            <div>
              <label>First name*</label>
              <input
        type="text"
        name="firstName"
        placeholder="First Name"
      
        required
      />
            </div>
            <div>
              <label>Last name*</label>
              <input
        type="text"
        name="lastName"
        placeholder="Last Name"
      
        required
      />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Date of Birth*</label>
              <input
        type="date"
        name="dob"
   
        required
      />
            </div>
            <div>
              <label>Resident City/Location*</label>
              <input
        type="text"
        name="city"
        placeholder="City"
       
        required
      />
            </div>
            <div>
              <label>PINCODE*</label>
              <input
        type="text"
        name="pincode"
        placeholder="Pincode"
      
        required
      />
            </div>
          </div>

          <div className="form-group ">
            <div>
              <label>Contact Number*</label>
              <input
        type="text"
        name="contact"
        placeholder="Contact Number"
        
        required
      />
            </div>
            <div>
              <label>Email address</label>
              <input
        type="email"
        name="email"
        placeholder="Email"
  
      />
            </div>
          </div>

          <h2>Creative Information</h2>
          <div className="creative-info">
            <p>
              Interested Field* <br />
              <span>(Select all interested categories to apply)</span>
            </p>

            {/* Acting and Filmmaking */}
            <div className="category">
              <div>
                <label>Acting</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Direction</label>
                <input type="checkbox" />
              </div>
              <div>
                <span>
                  <label>Production Managing</label>
                </span>
                <input type="checkbox" />
              </div>
              <div>
                <label>Filmmaking</label>
                <input type="checkbox" />
              </div>
            </div>


            {/* Writing Section */}
            <h3>Writing</h3>
            <div className="border">
            <div className="category">
              <div>
                <label>Screenplay Writing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Story Writing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Anime Writing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Manga Writing</label>
                <input type="checkbox" />
              </div>
              
              <div>
                <label>Content Writing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Novel Writing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Advertisement Writing</label>
                <input type="checkbox" />
              </div>
            </div>
            </div>

            {/* Music Section */}
            <h3>Music</h3>
            <div className="border">
            <div className="category">
              <div>
                <label>Singing</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Sound Production</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Mixing & Mastering</label>
                <input type="checkbox" />
              </div>
              <div>
                <label>Instrument Playing</label>
                <input type="checkbox" />
              </div>
            </div>
            </div>



          </div>

          <div className="form-group">
            <div>
              <label>Education</label> <span>(Highest completed education)</span>
              <input type="text"  />
            </div>
            <div>
              <label>Experience</label> <span>(Mention any relevant experience in interested field)</span>
              <input type="text"  />
            </div>


            
          </div>

          <div>
            <label>Hobbies*</label>
            <textarea
        name="hobbies"
        placeholder="Hobbies"
        
        required
      />
          </div>

          <div>
            <label>
            Upload portfolio/ creative samples* <br />
             <span>
             (5 different photos of yours with different looks /attires /style /location or any other work related to the field applied. Upload photos/ videos/ documents to a google drive and attach the link below.)</span>
            </label>
            <input
        type="text"
        name="portfolio"
        placeholder="Google Drive Link"
    
        required
      />
          </div>

          <button type="submit" className="submit-btn-profile">
            Submit Profile
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="image-section1">
        <img src={img} alt="Creative" />
      </div>

      
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default SubmitProfile;
