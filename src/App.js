import "cal-sans";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from "./Components/Intro/Intro";
import Welcome from "./Components/Welcome/Welcome";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="allComps">
    <Navbar/>
    <Intro/>
    <div className="bgtMain">
      {/* <img src={textureImg} alt="" /> */}
      <div className="bgTexture"></div>
      <div className="bgTexture"></div>
      </div>
      <div className="wwcf">
      <Welcome/>
    <WhatWeDo/>
    <ContactUs/>
    <Footer/>
      </div>
    
    </div>
  );
}

export default App;
