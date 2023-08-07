import React from 'react';
import "../App.css";
import './Footer.css';
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <div className='footer'>
          <Container>
            <Row>
                <Col md={12}>
                    <p>© 2023 DeveloperMV. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default Footer;