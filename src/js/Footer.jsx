import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Well style={{marginBottom: '0'}}>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={6}>
              <p>Made by EdenSchool</p>
            </Col>
            <Col xs={6}>
              <p className="text-right">Fils fe </p>
            </Col>
          </Row>
        </Grid>
      </Well>
    );
  }
}

export default Footer;
