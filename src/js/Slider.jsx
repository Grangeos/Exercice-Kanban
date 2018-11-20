import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Image, } from 'react-bootstrap';

class Slider extends PureComponent {
    static propTypes = {
        slides: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                imageSrc: PropTypes.string,
                imageAlt: PropTypes.string,
            })
        ).isRequired,
    }

    render() {
        const { slides } = this.props;

        return (
            <Carousel>
                {
                    slides.map(({ title, description, imageAlt, imageSrc }, idx) => (
                        <Carousel.Item key={idx}>
                            <Image alt={imageAlt} src={imageSrc} />
                            <Carousel.Caption>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        );
    }
}

export default Slider;
