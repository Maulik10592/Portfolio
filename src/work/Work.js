import React from 'react';
import './Work.css';
import {Container, Row, Col} from 'react-bootstrap';
import Slider from './Slider';

function Work() {
  return (
    <div className='Outerbox'>
      <Container className='WorkContainer'>
        <Row>
          <Col className="animated zoomIn">          
            <h2 id='glow'>My Work</h2>
            <Slider id="Slider"></Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default Work;