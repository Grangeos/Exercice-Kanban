import React, { PureComponent } from 'react';
import { Grid, Col, Row, Well } from 'react-bootstrap';

class Avantages extends PureComponent {
    render() {

        return (
            <Well>
              <h2 className="text-center"> <span style={{color:"lightGreen"}}>Avantages</span> / <span style={{color:"red"}}>Inconvéniants</span> de Kanban</h2>
              <Grid fluid>
                <Row className="show-grid">
                  <Col md={6}>
                    <Well style={{color: "lightGreen"}}>
                    <p>Cette méthode permet d'éviter la surproduction réduisant ainsi les coûts de stockage et les pertes, là où les entreprises “traditionnelles” optent pour un flux poussé (push) la méthode Kanban utilise un flux tiré (pull) déclenché par la consommation du client.</p>

                    </Well>
                  </Col>
                  <Col md={6}>
                    <Well style={{color: "red"}}>
                    <p>La perte d'étiquette ou un problème dans le système de Kanban peut causer des difficultés ou l'arrêt de la production.</p>

                    </Well>
                  </Col>
                </Row>
                <Row className="show-grid">
                <Col md={6}>
                  <Well style={{color: "red"}}>
                    <p>Le système ne fonctionne plus lorsque la demande est trop irrégulière</p>
                  </Well>
                </Col>
                  <Col md={6}>
                    <Well style={{color: "lightGreen"}}>
                      <p>Grâce aux étiquettes la détection des problèmes est plus rapide.</p>
                    </Well>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col md={6}>
                    <Well style={{color: "lightGreen"}}>
                      <p>Cette méthode encourage la collaboration pour résoudre les problèmes
                      La flexibilité : il est possible de décaler, de suspendre pour gérer d’autres tâches plus urgentes.</p>

                    </Well>
                  </Col>
                  <Col md={6}>
                    <Well style={{color: "red"}}>
                      <p>Il faut former les membres de l'équipe au règles de cette méthode</p>
                    </Well>
                  </Col>
                </Row>


              </Grid>
            </Well>
        );
    }
}

export default Avantages;
