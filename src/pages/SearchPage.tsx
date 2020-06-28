import React from 'react';
import { Container, InputGroup, FormControl, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Subscription } from 'rxjs';


class SearchPage extends React.Component {
    state = {
        query: '',
        projects: []
    };
    projectSub$: Subscription = new Subscription();

    constructor(props) {
        super(props);
        this.state.query = props.match.params.query;
    }


    searchBarChanged(event: any) {
        this.setState({
            query: event.target.value
        });
        console.log(this.state.query);
    }

    componentDidMount() {
        const projectsService = window['cernspace'];
        projectsService.projects$.subscribe((data) => {
            this.setState({ projects: data });
        });
    }

    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <Container>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="search"
                            placeholder="search"
                            aria-label="search"
                            onChange={($event) => this.searchBarChanged($event)}
                            value={this.state.query}
                        />
                    </InputGroup>
                    {this.state.projects
                        .filter(project => `${project.name}`.indexOf(this.state.query) !== -1)
                        .map((project, index) => (
                            <>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text id="heading">
                                            {project.shortDescription}
                                        </Card.Text>
                                        <Link to={"/project/" + project._id}>View Project</Link>
                                    </Card.Body>
                                </Card>
                                <br />
                            </>
                        ))}
                </Container>
            </>
        );
    }
}

export default SearchPage;