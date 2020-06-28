import React from 'react';
import { Container, InputGroup, FormControl, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Subscription } from 'rxjs';
import './SearchPage.css';

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

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="area" >

                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>


                    </ul>

                </div >


                <div className="context">
                    <h1>Project Search</h1>
                    <Container>
                        <InputGroup className="in mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="search"
                                placeholder="Enter project name (case sensitive)"
                                aria-label="search"
                                onChange={($event) => this.searchBarChanged($event)}
                                value={this.state.query}
                                id="search"
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
                                            <Link to={"/project/" + project._id}><Button className="align-self-end ">View Project</Button></Link>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </>
                            ))}


                    </Container>
                </div>







            </>
        );
    }
}

export default SearchPage;