import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Well style={{marginBottom: '0'}}>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={6}>
              <p>Made by Alexis / Mathias / Adrien / Raphael / Kyllian</p>
            </Col>
            <Col xs={6}>
              <p className="text-right"><a href="https://www.edenschool.fr/" target="_blank" >EDEN SCHOOL</a></p>
            </Col>
          </Row>
        </Grid>
      </Well>
    );
  }
}

export default Footer;
