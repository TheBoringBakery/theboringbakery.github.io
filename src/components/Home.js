import React from 'react';
import './Clash.css';
import {
    Container,
    Row,
    Col,
    Image
 } from 'react-bootstrap';

import Home1 from './parallax/Home1.js'
import Home2 from './parallax/Home2.js'

import shen2 from "../Shen_0.jpg"
import shen3 from "../Shen_2.jpg"


function Home () {
    return (
        <div className="main">
            <Container fluid>
                <div className="presentation text-center text-white py-5">
                    <h1 className="my-3">MoonCaker</h1>
                    <h3>Improve your clash experience with our comp suggestions</h3>
                    <Row className="justify-content-md-center">
                        <Col md="8" className="my-5 ">
                            <div className="embed-responsive embed-responsive-16by9">
                              <iframe className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/BGtROJeMPeE"
                                    title="video presentation"
                                    allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="spacer"/>
            <div className="py-5">
                    <Row className="align-items-center">
                        <Col xl={7}>
                            <Home1 />
                        </Col>
                        <Col xl={4} className="text-center text-white align-middle">
                            <h3>Get tailored suggestions based on your best champions</h3>
                        </Col>
                        </Row>
             </div>
            <div className="spacer1"/>
            <div className="py-5">
                    <Row className="align-items-center">
                        <Col xl={4} className="text-center text-white p-5 align-middle">
                            <h3>Get tailored suggestions based on your best champions</h3>
                        </Col>
                        <Col xl={7}>
                            <Home2 />
                        </Col>
                        </Row>
             </div>
             <div className="second-content">
                     <Container fluid>
                     <Row className="align-items-center py-0">
                     <Col sm={{span:5, order:'last'}} className="text-center py-5">
                         <Image
                           src={shen2}
                           width="1100"
                           height="800"
                           fluid
                         />
                     </Col>
                         <Col sm={6}  className="text-center text-white p-5 align-middle">
                             <h3>Get a comp that works</h3>
                         </Col>
                         </Row>
                     </Container>
              </div>
              <div className="third-content">
                      <Container fluid>
                       <Row className="align-items-center py-0">
                          <Col sm={{span:5, offset: 1, order:'first'}} className="text-center py-5">
                              <Image
                                src={shen3}
                                width="1100"
                                height="800"
                                fluid
                              />
                          </Col>
                          <Col sm={6} className="text-center text-white p-5 align-middle">
                              <h3>Powered by the most advanced artificial intelligence</h3>
                          </Col>
                          </Row>
                      </Container>
               </div>
        </div>
    )
}
 export default Home;
