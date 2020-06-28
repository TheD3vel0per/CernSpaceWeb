import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './SingleProjectPage.css';
import Cards from '../components/Cards';
import { Subscription } from 'rxjs';

class SingleProjectPage extends React.Component {
    state = {
        id: '',
        project: {
            _id: '',
            name: '',
            shortDescription: '',
            longDescription: '',
            images: [],
            lastUpdated: 0,
            host: {
                ip: '',
                port: 0,
                token: ''
            }
        }
    };
    projectsSub$: Subscription = new Subscription();

    constructor(props: any) {
        super(props);
        this.state.id = props.match.params.id;

    }

    componentDidMount() {
        const projectsService = window['cernspace'];
        projectsService.getProject(this.state.id)
            .then((result) => {
                console.log(result);
                this.setState({ project: result });
            })
            .catch((error) => {
            });


    }

    componentWillUnmount() {
        this.projectsSub$.unsubscribe();
    }

    render() {
        return (
            <>
                <Container>
                    <Col>
                        <Row>
                            <Carousel id="carousel">
                                {this.state.project.images.map((imageSrc, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={imageSrc}
                                            alt="image"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        </Row>
                        <Row>
                            <h1 id="projectname" className="content">
                                {this.state.project.name}
                            </h1>
                        </Row>
                        <Row>
                            <p id='shortdescription' className="content">
                                {this.state.project.shortDescription}
                            </p>
                        </Row>
                        <Row>
                            <p id="longdescription" className="content">
                                {this.state.project.longDescription}
                            </p>
                        </Row>
                    </Col>
                </Container>
            </>

        );

    }
}
export default SingleProjectPage;