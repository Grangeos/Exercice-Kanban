import React, { PureComponent } from 'react';
import imgFonctionnement from "../Img/ImgFonctionnement.png";
import Section from "./Section";

class Fonctionnement extends PureComponent {
  render() {
    return (
      <Section {...this.props} title="Fonctionnement de Kanban" imageAlt="Image avec un tableau utilisant la methode Kanban" imageSrc={imgFonctionnement}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad voluptatem praesentium. Perspiciatis,
          dolores nulla repellat magni, repellendus rerum consequuntur nobis rem labore, tempore aperiam neque illo
          sapiente eligendi aspernatur!
      </Section>
    );
  }
}

export default Fonctionnement;
