import "cal-sans";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Intro from "./Components/Intro/Intro";
import Welcome from "./Components/Welcome/Welcome";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import SubmitProfile from "./Components/SubmitProfile/SubmitProfile";

function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <div className="allComps">
              <div className="bgtMain">
                <div className="bgTexture"></div>
                <div className="bgTexture"></div>
              </div>
              <div className="wwcf">
                <Welcome />
                <WhatWeDo />
                <ContactUs />
                
              </div>
              </div>
            </>
          } />
          <Route path="/submit-profile" element={<SubmitProfile />} />
        </Routes>
        <Footer />
      
    </Router>
  );
}

export default App;
