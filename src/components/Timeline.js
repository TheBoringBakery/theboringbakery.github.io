import React from 'react';
import './Clash.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Container,
    Row,
    Col,
    Image
 } from 'react-bootstrap';

 function Timeline () {
     return (
         <div className="main">
            <Container>
            <Row className="justify-content-center pb-5">
            <h1 className="text-white text-center p-5">The road to challenger</h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date="2008 - 2010"
                dateClassName="text-white"
                iconStyle={{ background: '#6FAAE2', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                dateClassName="text-white"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

              >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                dateClassName="text-white"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

              >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                  Strategy, Social Media
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                dateClassName="text-white"
                date="November 2012"
                iconStyle={{ background: '#4B3B78', color: '#fff' }}

              >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                  Creative Direction, User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
            </Row>
            </Container>
        </div>
     )
 }
 export default Timeline;
