import React from 'react';
import "../App.css";
import './Home.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import MatrixCanvas from './MatrixCanvas';

function Home() {
  
  const Maulik_CV = process.env.PUBLIC_URL + 'Maulik-Resume.pdf';
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer','Web Developer','UI Developer','HTML Developer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className='Outerbox homeOuterBox'>
      <MatrixCanvas className="MatrixCanvas" />
      <Container className='homeContainer'>
        <Row>
          <Col md={12} lg={7} xl={6} className="animated fadeInLeft">          
            <h1>Hi! I'm<br/><span id='glow'>Maulik Vaghela</span></h1>
            <h2><span ref={el}></span></h2>
            <div className='d-flex'>
              <a rel="contact" href="/contact" className="btn btnHover">Contact me!</a>
              <a rel="noreferrer" href={Maulik_CV} download={Maulik_CV} target='_blank' className="btn btnHover">Maulik CV</a>
            </div>            
          </Col>
          <Col md={12} lg={5} xl={6} className="animated zoomIn"> 
            <div className='mLogo'>
              <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} alt="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;