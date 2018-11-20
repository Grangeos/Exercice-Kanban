import React, { PureComponent, Fragment } from 'react';
import { Navbar, Jumbotron, Grid, Col, Image } from 'react-bootstrap';
import Section from './Section';
import Header from "./Header";


class App extends PureComponent {
  render() {
    return(
      <Fragment>
        <Header/>
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
        </Grid>
      </Fragment>
    );
  }
}

export default App;
