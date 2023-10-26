import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Header from './header/Header';
import Home from "./home/Home";
import About from './about/About';
import Skill from './skill/Skill';
import Work from './work/Work';
import Contact from './contact/Contact';
import NoMatch from './nomatch/NoMatch';
import Loader from './Loader';
import { useState, useEffect } from 'react';
//import DarkMode from './DarkMode';
import ColorSwitcher from './colorswitcher/ColorSwitcher';

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className='Portfolio'>
      {
        loading? <Loader/> : 
        <>
          <Header />
          {/* <DarkMode /> */}
          <ColorSwitcher />
          <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/skill" element={<Skill />} />
            <Route exact path="/about" element={<About />} /> 
            <Route exact path="/" element={<Home />} />
          </Routes>
        </>
      }
    </div>
  );
}
export default App;