import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   Container, Row, Col
} from "shards-react";

import About from './About';
import Home from './Home';
import Footer from './Footer';
import Blog from './Blog';

export default class App extends Component {

  render() {
    return (
      <Container className="welcome-page">
        <Row>
          <Col>

            <BrowserRouter>

              <Navbar className="nav-section" type="light" theme="light" expand="md" sticky>
                <NavbarBrand href="/Home"><img className="logo" src={logo} alt="Logo" /></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />

                  <Nav navbar className="ml-auto">

                    <Nav navbar>
                      <NavItem>
                        <NavLink active href="/Home">
                          Home
                      </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink active href="/About">
                          About
          </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/Blog">
                          Blog
          </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink active href="/Contact">
                          Contact
          </NavLink>
                      </NavItem>
                    </Nav>
                  </Nav>

              </Navbar>

              <Switch>
                <Route exact path='/About' component={About} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Blog' component={Blog} />
                <Route component={Home} />
              </Switch>
            </BrowserRouter>

          </Col>
        </Row>

        <Row>
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}


// finish the depolyming of the name using this here https://medium.com/better-programming/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb