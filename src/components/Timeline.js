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
  import { Chrono } from "react-chrono";

 function Timeline () {

     const items = [{
        title: "April 21 2021",
        cardTitle: "Born",
        cardSubtitle: "On 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940",
    },
        {
           title: "May 7 2021",
           cardTitle: "Publish website",
           cardSubtitle: "On 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940",
        },
        {
           title: "Q2 2021",
           cardTitle: "Deploy engine application",
           cardSubtitle: "On 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940",
           },
           {
              title: "Q3 2021",
              cardTitle: "Realease Alpha",
              cardSubtitle: "On 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940, Hitler began his long-awaited offensive in the west fffffffOn 10 May 1940",
              }
    ];

     return (
         <div className="main">
            <Container>
            <Row className="justify-content-center py-5">
            <h1 className="text-white py-5">The road to challenger</h1>
            <Col sm={{span: 10}}>
            <div>
                <Chrono items={items} mode="VERTICAL_ALTERNATING"
                 hideControls
                 slideShow
                 slideItemDuration={4500}
                 theme={{primary: "black", secondary: "#A32931", cardBgColor: "#A32931;", cardForeColor: "white" }} />
            </div>
            </Col>
            </Row>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
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
    className="vertical-timeline-element--education"
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
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
            </Container>
        </div>
     )
 }
 export default Timeline;
