import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col, Well } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Well>
        <Grid>
          <Col xs={6} style={{ padding: 0 }}>
            <p className="text-left">Made by EdenSchool</p>
          </Col>
          <Col xs={6} style={{ padding: 0 }}>
            <p className="text-right">
              <a target="_blank" href="https://www.edenschool.fr">EdenSchool</a>
            </p>
          </Col>
        </Grid>
      </Well>
    );
  }
}

export default Footer;
