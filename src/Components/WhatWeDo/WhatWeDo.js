import React from "react";
import "./WhatWeDo.css";

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
          <img src={ActingImg} alt="Acting" />
          <span className="grid-text">ACTING</span>
        </div>
        <div className="grid-item writing">
          <img src={WritingImg} alt="Writing" />
          <span className="grid-text">WRITING</span>
        </div>
        <div className="grid-item production">
          <img src={ProductionManagingImg} alt="Production Managing" />
          <span className="grid-text">PRODUCTION MANAGING</span>
        </div>
        <div className="grid-item direction">
          <img src={DirectionImg} alt="Direction" />
          <span className="grid-text">DIRECTION</span>
        </div>
        <div className="grid-item filmmaking">
          <img src={FilmmakingImg} alt="Filmmaking" />
          <span className="grid-text">FILMMAKING</span>
        </div>
        <div className="grid-item music">
          <img src={MusicImg} alt="Music" />
          <span className="grid-text">MUSIC</span>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
