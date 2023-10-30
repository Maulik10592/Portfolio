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
          <Col md={12} lg={6} className="animated fadeInLeft">         
            <h2 id='glow'>Contact Me</h2>
            <p>I’m Interested in freelance opportunities - especiallly ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
            <ContactForm />
          </Col>
          <Col md={12} lg={6} className="animated fadeInRight"> 
              <iframe  loading="lazy" title='address' id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d922.5259312501956!2d73.18954192846694!3d22.349711998722896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIwJzU5LjAiTiA3M8KwMTEnMjQuNyJF!5e0!3m2!1sen!2sin!4v1691753344952!5m2!1sen!2sin"></iframe>
              {/* <GoogleMap /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default Contact;