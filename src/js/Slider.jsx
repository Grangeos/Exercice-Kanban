import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Image, } from 'react-bootstrap';

class Slider extends PureComponent {
    static propTypes = {
        slides: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
            })
        ).isRequired,
    }

    render() {
        const { slides } = this.props;

        return (
            <Carousel style={{ backgroundImage: "none"}}>
                {
                    slides.map(({ title, description }, idx) => (
                        <Carousel.Item key={idx}>
                            <div style={{height:'300px', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
                              <h3>{title}</h3>
                              <p>{description}</p>

                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        );
    }
}

export default Slider;
