import React from 'react';
import './Clash.css';
import {
    Container,
    Row,
    Col,
    Image
 } from 'react-bootstrap';

import Fg1 from './parallax/Fg1.js'
import Bg1 from './parallax/Bg1.js'
import Mid1 from './parallax/Mid1.js'
import shen1 from "../Shen_15.jpg"
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
            <div className="first-content py-5">
                    <Container fluid>
                    <Row className="align-items-center py-0">
                        <Col xl={{span: 7, offset: 0}} className="py-5 justify-content-start">
                            <Fg1 />
                        </Col>
                        <Col xl={3} className="text-center text-white p-5 align-middle">
                            <h3>Get tailored suggestions based on your best champions</h3>
                        </Col>
                        </Row>
                    </Container>
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
