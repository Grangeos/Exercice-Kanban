import React, { PureComponent, Fragment } from 'react';
import { Jumbotron, Grid, Well } from 'react-bootstrap';
import Section from './Section';
import Principes from "./Principe";
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Introduction from "./Introduction";
import Fonctionnement from "./Fonctionnement";
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
              <Introduction id="introduction" />
              <Principes id="principes" />
              <Fonctionnement id="fonctionnement" />
              <Well id="principes-kanban">
                <h2 className="text-center"> Les 4 principaux principes de la methode Kanban</h2>
                  <Slider slides={[
                      {
                          title: 'Commencez par ce que vous faites aujourd’hui :',
                          description: 'La méthode Kanban utilise les processus déjà utilisés et encourage de les améliorer au fur et à mesure.',
                      },
                      {
                          title: 'Accepter d’appliquer des changements progressifs : ',
                          description: ' L équipe doit accepter d améliorer le système en place par des changements progressif.',
                      },
                      {
                          title: 'Respectez le processus actuel, les rôles, les responsabilités et les titres :',
                          description: 'Pour faciliter les changement à venir, il faut éliminer la crainte du changement en respectant les rôles, les responsabilité et les titres professionnel de chacun.',
                      },
                      {
                          title: 'Leadership à tous les niveaux :',
                          description: 'Que ce soit collaborateur ou cadres supérieurs, tous les actes de leadership doivent être encourager.',
                      }
                  ]} />
                </Well>
            <Avantages id="avantages-inconvenients" />
            <Section id="conclusion" title="Conclusion de Kanban">
                La méthode Kanban est utilisée en grande majorité dans le secteur de la production industrielle. Avec cette méthodologie, ce sont les commandes des clients qui déclenchent la production… <br />
                Le but étant d'éviter au maximum d'avoir du stock <br />
                Cette approche permet de favoriser la collaboration pour résoudre les problèmes.
            </Section>
          </Grid>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
