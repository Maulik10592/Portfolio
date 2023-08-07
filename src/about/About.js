import React from 'react';
import './About.css';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMySkills from './AboutMySkills';

function About() {

  const Maulik_CV = process.env.PUBLIC_URL + 'Maulik-Resume.pdf';

  return (
    <div className='Outerbox'>
      <Container className='AboutContainer'>
        <Row>
          <Col md={12} lg={12} xl={6} className="animated fadeInLeft">          
            <h2 id='glow'>My, Myself & I</h2>
            <p>I’m a Front-End Developer located in Vadodara, Gujarat, India. I have a serious passion for UI Developemnt, UI effects, animations and creating intuitive, dynamic user experiences.</p>
            <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series and English Movies. A family person and the father of a lovely boy.</p>
            <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            <a rel="noreferrer" href={Maulik_CV} download={Maulik_CV} target='_blank' className="btn btnHover">Maulik CV</a>
          </Col>
          <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 0 }} className="animated fadeInRight">
            <AboutMySkills />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default About;