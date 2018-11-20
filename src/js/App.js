import React, { Fragment } from 'react';
import { Navbar, Jumbotron, Grid, Col, Image } from 'react-bootstrap';
import Section from './Section';
import Avantages from './Avantages';

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

            <Section title="Titre H2" imageAlt="" imageSrc="https://placehold.it/512x512">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
            </Section>

            <Section title="Titre H2" imageAlt="" imageSrc="https://placehold.it/512x512">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
            </Section>

            <Section title="Titre H2" imageAlt="" imageSrc="https://placehold.it/512x512">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
            </Section>
            <Avantages />
            
        </Grid>
    </Fragment>

);

export default App;
