import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from '../components/Carousel';

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

    constructor(props: any) {
        super(props);
        this.state.id = props.match.params.projectId;
    }

    componentDidMount() {
        const projectsService = window['cernspace'];
        const project = projectsService.getProject(this.state.id);
        this.setState({ project : project });
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
        <Col>{this.state.project.name}</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>

                        <Col>
                            <div className="carouselBackground">
                                <Carousel> </Carousel>
                            </div>
                        </Col>

                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </>
        );

    }
}
export default SingleProjectPage;