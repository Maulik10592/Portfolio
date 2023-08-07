import React from 'react';
import './Contact.css';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './ContactForm';
// import GoogleMap from './GoogleMap';

function Contact() {
  return (
    <div className='Outerbox'>
      <Container className='ContactContainer'>
        <Row>
          <Col md={12} lg={12} xl={6} className="animated fadeInLeft">         
            <h2 id='glow'>Contact Me</h2>
            <p>I’m Interested in freelance opportunities - especiallly ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
            <ContactForm />
          </Col>
          <Col md={12} lg={12} xl={6} className="animated fadeInRight"> 
              <iframe title='address' id="gmap_canvas" src="https://maps.google.com/maps?q=Vrundavan Duplex Near Preet party plot Vadodara 390024 &t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
              {/* <GoogleMap /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default Contact;