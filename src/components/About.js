import React from 'react';
import './Clash.css';
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    Button
 } from 'react-bootstrap';
 import shen1 from "../Shen_15.jpg"
import { Slide } from 'react-awesome-reveal';

function About () {
    return (
    <div className="main">
        <Container fluid>
        <div className="py-4"/>
        <h1 className="py-5 text-center text-white">About us</h1>
        <div className="py-4"/>
        <div className="first-content">
                <Slide direction={'left'} duration={2500}>
                <Row className="align-items-center feature2 py-3 rounded-right justify-content-end"
                style={{marginRight: '5rem'}}>
                <Col sm={5} className="text-left text-white py-5 align-middle">
                    <h5>We are a small team of enthusiast gamers
                        motivated to build a great software that can help
                        every elo player in advancing their skills.
                        We are a group of four people. Three of us are
                        computer scientists two of which are specializing in
                        Artificial Intelligence. While our last team member
                        is finishing her studies as a designer.</h5>
                </Col>
                    <Col sm={6}>
                        <Image
                          src={shen1}
                          width="1100"
                          height="800"
                          fluid
                        />
                    </Col>
                </Row>
                </Slide>
            </div>
            <div className="py-5"/>
            <div className="second-content">
                <Slide direction={'right'} duration={2500}>
                <Row className="align-items-center feature3 py-3 rounded-left"
                    style={{marginLeft: '5rem'}}>
                    <Col sm={5} className="text-right text-white p-5 align-middle">
                        <h5>As you may image this is a just a side project we are
                            doing mostly for fun. But this won't stop us from
                            giving our best in creating a great product
                            everyone can enjoy using!
                            If you want to report a bug, give your contribution
                            to the project or just suggest a feature don't esitate
                            to contact us with the form below.</h5>
                    </Col>
                    <Col sm={{span:6, order:'first'}}>
                        <Image
                          src={shen1}
                          width="1100"
                          height="800"
                          fluid
                        />
                    </Col>
                </Row>
                </Slide>
           </div>
         </Container>
         <div className="py-5"/>
         <h2 className="py-5 text-center text-white">Contact us</h2>
         <Container>
         <Form action="https://theboringbakery.com/send_suggestion/" method="post">
            <Form.Row className="py-3 justify-content-center">
                <Col sm={{span: 4, offset: 0}}>
                  <Form.Control placeholder="Your mail" name="email" required/>
                </Col>
                <div style={{padding: '1rem'}} className="d-block d-sm-none"/>
                <Col sm={{span:4, offset:0}}>
                  <Form.Control placeholder="Your Name/Username" name="username" required/>
                </Col>
              </Form.Row>
             <Form.Row className="py-3 justify-content-center">
                 <Col sm={{span: 8, offset: 0}}>
                   <Form.Control placeholder="The reason why you are contacting us" name="reason" required/>
                 </Col>
            </Form.Row>
            <Form.Row className="py-3 justify-content-center">
                <Col sm={{span: 8, offset: 0}}>
                  <Form.Control as="textarea" rows={10} placeholder="Description" name="description" required/>
                </Col>
           </Form.Row>
           <Form.Row className="py-3 justify-content-end">
                <Col xs={{offset: 10}} sm={{offset: 9}}>
                   <Button className="btn-about" type="submit">
                        Submit
                   </Button>
               </Col>
           </Form.Row>
        </Form>
        </Container>
        <div className="py-5"/>
    </div>

    )
}
export default About;
