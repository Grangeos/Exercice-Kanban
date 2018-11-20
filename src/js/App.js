import React, { PureComponent, Fragment } from 'react';
import { Jumbotron, Grid, } from 'react-bootstrap';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Introduction from "./Introduction";
import Avantages from './Avantages';

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

              <Introduction/>

            <Section title="Titre H2" imageAlt="" imageSrc="https://placehold.it/512x512">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
            </Section>

            <Section title="Titre H2" imageAlt="" imageSrc="https://placehold.it/512x512">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis, dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo sapiente eligendi aspernatur!
            </Section>
            <Section title="Conclusion de Kanban" imageAlt="" imageSrc="https://placehold.it/512x512">
            La méthode Kanban est utilisée en grande majorité dans le secteur de la production industrielle. Avec cette méthodologie, ce sont les commandes des clients qui déclenchent la production… <br />
            Le but étant d'éviter au maximum d'avoir du stock <br />
            Cette approche permet de favoriser la collaboration pour résoudre les problèmes.

            </Section>
            <Avantages />

        </Grid>
        <Slider slides={[
            {
                title: 'Première slide',
                description: 'Description...',
                imageSrc: 'https://placehold.it/1024x512',
                imageAlt: '',
            },
            {
                title: 'Deuxième slide',
                description: 'Description...',
                imageSrc: 'https://placehold.it/1024x512',
                imageAlt: '',
            }
        ]} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
