import React, { Fragment } from 'react';
import { Navbar, Jumbotron, Grid, Col } from 'react-bootstrap';

const App = () => (
    <Fragment>
        { /* Move to ./Header.jsx */ }
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Kanban</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>

            </Navbar.Collapse>
        </Navbar>

        {/* Move to FindAProperName.jsx */}
        <Grid>
            <Jumbotron>
                <h1 className="abelone text-center">Kanban</h1>
            </Jumbotron>

             {/* Créer composant réutilisable */}
            <section className="well">
                <Grid fluid>
                    <Col md={8}>
                        <h2>Titre h2</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
                        </p>
                    </Col>
                    <Col md={4}>
                        <img alt="" src="https://placehold.it/512x512" />
                    </Col>
                </Grid>


            </section>
        </Grid>
    </Fragment>

);

export default App;
