import React from 'react';
import './Skill.css';
import MySkills from './MySkills';
import {Container, Row, Col} from 'react-bootstrap';

function Skill() {
  return (
    <div className='Outerbox'>
      <Container className='SkillContainer'>
        <Row>
          <Col md={12} lg={6} className="animated fadeInLeft">       
            <h2 id='glow'>Skills & Experience</h2>
            <p>As a front-end developer I have total 5 years experience. I’ve done my work for company, for startups, and collaborated with talented people to create websites for both business and consumer use.</p>
            <p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, features, animations, and coding interactive layouts.</p>
            <p>I also have experience with popular open-source CMS like (WordPress, Drupal), and with designing like (Illustratation, Photoshop, Figma, XD).</p>
            <p>Visit my <a className='linkHover' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/maulik-vaghela-b75549107/" data-replace="LinkedIn"><span>LinkedIn</span></a> profile for more details or just <a className='linkHover' href="/contact" data-replace="Contact"><span>Contact</span></a> me.</p>  
          </Col>
          <Col md={12} lg={6} className="animated fadeInRight"> 
            <MySkills />
          </Col>

          {/* <Col md={12} lg={6} className="animated fadeInRight"> 
              <div className="skillBox">
                <div className="bar expert" data-skill="HTML5/CSS3"></div>
                <div className="bar intermediate" data-skill="Jquery/JavaScript"></div>
                <div className="bar advanced" data-skill="Bootstrap/Foundation"></div>
                <div className="bar advanced" data-skill="WordPress"></div>
                <div className="bar intermediate" data-skill="Drupal"></div>
                <div className="bar basic" data-skill="React/Angular"></div>
                <div className="bar intermediate" data-skill="Photoshop/Illustration"></div>
                <div className="bar basic" data-skill="XD/Figma"></div>
              </div>
          </Col> */}
          
        </Row>
      </Container>
    </div>
  );
}
  
export default Skill;