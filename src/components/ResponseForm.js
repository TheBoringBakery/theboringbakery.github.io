import React from 'react'
import {
    Container,
    Row,
    Col,
    Image
 } from 'react-bootstrap';
 import './Clash.css';


function ResponseForm() {
  return(
      <div className="main" style={{minHeight: '920px'}}>
        <Container>
            <Row className="justify-content-center spacer-simple-page">
                <h4 className="text-white text-center">Thanks for contacting us. Good climb towards the challenge
                    <Image
                    src="/zoe_response.gif"
                    width="370"
                    fluid />
                </h4>
            </Row>
        </Container>
      </div>
  );
}

export default ResponseForm;
