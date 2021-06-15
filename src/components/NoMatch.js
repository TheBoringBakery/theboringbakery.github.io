import React from 'react'
import {
    Container,
    Row,
    Col,
    Image
 } from 'react-bootstrap';
 import './Clash.css';


function NoMatch() {
  return(
      <div className="main" style={{minHeight: '920px'}}>
        <Container>
            <Row className="justify-content-center spacer-simple-page">
                <h4 className="text-white text-center">Oops, there doesn't seem to be anything here...
                    <Image
                    src="/zoe_sad.png"
                    width="370"
                    fluid />
                </h4>
            </Row>
        </Container>
      </div>
  );
}

export default NoMatch;
