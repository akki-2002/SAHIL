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
    <>
    <Navbar/>
    <Intro/>
    <Welcome/>
    <WhatWeDo/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
