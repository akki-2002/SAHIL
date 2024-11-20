import React from "react";
import "./WhatWeDo.css";
import { Link } from 'react-router-dom';

// Image Imports (Update the paths to match your setup)
import ActingImg from "../../Images/acting.png";
import WritingImg from "../../Images/writing.png";
import ProductionManagingImg from "../../Images/Production.png";
import DirectionImg from "../../Images/direction.png";
import FilmmakingImg from "../../Images/flimmaking.png";
import MusicImg from "../../Images/music.png";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <h2 className="what-we-do-title">What we do</h2>
      <div className="grid-container">
        {/* Grid Items */}
      
        <div className="grid-item acting">
        <Link to="/submit-profile" className="submit-link">
          <img src={ActingImg} alt="Acting" />
          <span className="grid-text">ACTING</span>
          </Link>
        </div>
  
        
        <div className="grid-item writing">
        <Link to="/submit-profile" className="submit-link">
          <img src={WritingImg} alt="Writing" />
          <span className="grid-text">WRITING</span>
          </Link>
        </div>
  
      
        <div className="grid-item production">
        <Link to="/submit-profile" className="submit-link">
          <img src={ProductionManagingImg} alt="Production Managing" />
          <span className="grid-text">PRODUCTION MANAGING</span>
          </Link>
        </div>

        
        <div className="grid-item direction">
        <Link to="/submit-profile" className="submit-link">
          <img src={DirectionImg} alt="Direction" />
          <span className="grid-text">DIRECTION</span>
          </Link>
        </div>
       
     
        <div className="grid-item filmmaking">
        <Link to="/submit-profile" className="submit-link">
          <img src={FilmmakingImg} alt="Filmmaking" />
          <span className="grid-text">FILMMAKING</span>
          </Link>
        </div>
        
        
        <div className="grid-item music">
        <Link to="/submit-profile" className="submit-link">
          <img src={MusicImg} alt="Music" />
          <span className="grid-text">MUSIC</span>
          </Link>
        </div>
    
      </div>
    </div>
  );
};

export default WhatWeDo;
