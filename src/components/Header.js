import React from 'react';
import './Clash.css'
import {Link} from 'react-router-dom'

import {
    Navbar,
    Nav,
    Container,
 } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        return <Navbar variant="dark" expand="md" className="justify-content-end main2">
            <Container>
              <Navbar.Brand>MoonCaker {' '}
                  <img
                    src="/moon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}}/>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav activeKey="/home">
                      <Nav.Item>
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as={Link} to="/about">
                            About us
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as={Link} to="/timeline">
                            What's new
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
              </Navbar.Collapse>
             </Container>
            </Navbar>
    }

}
export default Header;
