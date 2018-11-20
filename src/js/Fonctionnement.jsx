import React, { PureComponent, Fragment } from 'react';
import imgFonctionnement from "../Img/Kanban.jpg";
import Section from "./Section";

class Fonctionnement extends PureComponent {
  render() {
    return(
      <Section title="Fonctionnement de Kanban" imageAlt="" imageSrc={imgFonctionnement}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis,
          dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo
          sapiente eligendi aspernatur!
      </Section>
    );
  }
}

export default Fonctionnement;
