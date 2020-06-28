import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Carousel.css';






class AppCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Carousel id="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1591817784672-dfcae68b3d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=900&q=60"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1591817784672-dfcae68b3d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=900&q=60"
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1591817784672-dfcae68b3d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=900&q=60"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        );
    }

}

export default AppCarousel;


{/*
            <Carousel id="carousel">
                <Carousel.Item >
                    <img 
                        className="d-block w-100% md-4"
                        src="https://images.unsplash.com/photo-1591817784672-dfcae68b3d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=900&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100% md-4"
                        src=""
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100% md-4"
                        src=""
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    */}
