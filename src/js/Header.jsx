import React, { Component } from "react";
import { Nav, Navbar, NavItem, Jumbotron, Grid, Col, Row } from 'react-bootstrap';

function smoothScrollTo(anchor) {
  const el = document.querySelector(anchor);
  try {
    el.scrollIntoView({ behavior: 'smooth' });
  } catch (e) {
    el.scrollIntoView(true);
  }
}

const AnchorItem = ({ children, href, ...props }) => (
  <NavItem href={href} {...props} onClick={() => smoothScrollTo(href)}>
    {children}
  </NavItem>
)

class Header extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Kanban</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <AnchorItem href="#introduction">
                  Introduction
                </AnchorItem>
                <AnchorItem href="#principes">
                  Principes
                </AnchorItem>
                <AnchorItem href="#fonctionnement">
                  Fonctionnement
                </AnchorItem>
                <AnchorItem href="#principes-kanban">
                  4 principes Kanban
                </AnchorItem>
                <AnchorItem href="#avantages-incovenients">
                  Avantages/Inconvenients
                </AnchorItem>
                <AnchorItem href="#conclusion">
                  Conclusion
                </AnchorItem>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
