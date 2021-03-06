import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Image } from 'react-bootstrap';

class Section extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
    }

    render() {
        const { title, imageAlt, imageSrc, children, ...props } = this.props;

        return (
            <section className="well" {...props}>
                <Grid fluid>
                    <Col md={8}>
                        <h2>{title}</h2>
                        <p>
                            {children}
                        </p>
                    </Col>
                    <Col md={4}>
                        <Image alt={imageAlt} src={imageSrc} responsive />
                    </Col>
                </Grid>
            </section>
        );
    }
}

export default Section;
