import React, { PureComponent, Fragment } from 'react';
import Section from "./Section";
import imgPrincipe from "../Img/imgPrincipes.jpg";

class Principes extends PureComponent {
  render() {
    return(
      <Section title="Principes de Kanban" imageAlt="Tableau Kanban avec une grille to do, doing et done" imageSrc={imgPrincipe}>
      Le principe de la méthodologie Kanban est de produire quand il nous ait demandé
      de produire et non comme la méthodologie scrum qui nous demande de produire tant
      qu’il y a matière à produire.
      Le but est de limiter le nombre de tâche que nous pouvons prendre en même temps,
      si une équipe à atteint le nombre limite de tâche et qu’elle ne peut pas en prendre
      plus cela signifie que la chaîne est “bloquée” quelque part,
      l’équipe va donc aller voir où le problème se situe, proposer son aide...
      Quand tout est réglé, ils peuvent se libérer de leurs tâches,
      les faire passer à l’équipe d’après dans la chaîne et en prendre d’autres, ainsi de suite.
      </Section>
    );
  }
}

export default Principes;
