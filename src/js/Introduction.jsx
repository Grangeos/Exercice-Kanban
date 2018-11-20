import React, { PureComponent, Fragment } from 'react';
import Section from "./Section";
import imgIntroduction from "../Img/ImgFonctionnement.png";

class Introduction extends PureComponent {
  render() {
    return(
      <Section id="introduction" title="Introduction à Kanban" imageAlt="" imageSrc={imgIntroduction}>
        La méthodologie Kanban vient de l’industrie automobile au Japon, elle a été créée par Taiichi Ōno pour Toyota en 1950 dans le but d’optimiser leur capacité de production afin d’être compétitif face aux entreprises américaines.
        La méthode Kanban est basée sur l’approche “Lean”, qui est une amélioration continue des processus de production afin de permettre une gestion de la production sans gaspillage.
        La méthode “Lean” est fondée sur 4 principes :
        <ul>
          <li> Réduire les coûts de production </li>
          <li> Éviter la surproduction</li>
          <li> Diminuer les délais</li>
          <li> Produire avec la meilleure qualité possible</li>
        </ul>
      </Section>
    );
  }
}

export default Introduction;
