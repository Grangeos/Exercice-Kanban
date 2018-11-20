import React, { Component } from "react";
import { Nav, Navbar, NavItem, Jumbotron, Grid, Col, Row } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Kanban</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  Introduction
                </NavItem>
                <NavItem>
                  Principes
                </NavItem>
                <NavItem>
                  Fonctionnement
                </NavItem>
                <NavItem>
                  4 principes Kanban
                </NavItem>
                <NavItem>
                  Avantages/Inconvenients
                </NavItem>
                <NavItem>
                  Conclusion
                </NavItem>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
