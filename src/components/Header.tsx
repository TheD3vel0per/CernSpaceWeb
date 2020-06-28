import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav, Form, FormControl, FormGroup } from 'react-bootstrap';
import './Header.css';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Subscription } from 'rxjs';

class Header extends React.Component {


    state = {
        projects: [],
        proj: '',
    };
    projectsSub$: Subscription = new Subscription();

    constructor(props: any) {
        super(props);
        // this.keyPress = this.keyPress.bind(this);
    }

    componentDidMount() {
        const projectsService = window['cernspace'];

        this.projectsSub$ = projectsService.projects$.subscribe((data) => {
            //console.log(data[0]);
            this.setState({ projects: data });
        });

    }

    componentWillUnmount() {

        this.projectsSub$.unsubscribe();

    }


    handleSubmit = async (event) => {
        event.preventDefault();

        // implement filtering here
    }

    findFirstProjectId = (searchQuery) => {

        return `/search/${searchQuery}`;

        // // filter projects
        // const filteredProjects = this.state.projects.filter(project => project.name.indexOf(searchQuery) !== -1);
        // // return the search result id
        // if (filteredProjects.length === 0){
        //     return "";
        // }

        // return '/project/'+filteredProjects[0]._id;

        // go through each array element and check if name is equal to the name entered by user.
        /*
       this.state.projects.forEach(function(element) {
           if (element.name === searchQuery){
               alert("FOUND");
               
               return element.name; // CURRNETLY
           }
       });
       */

    };

    handleKeyPress(e) {
        if (e.keyCode === 13) {
            alert("Pressed Enter");
        }
        else {
            alert("Nothing happened");
        }

    }


    render() {

        return (
            <div>
                <Navbar variant="dark" className="navbar navbar-inverse " fixed="top">
                    <Navbar.Brand>
                        <img src="/images/CernSpaceFlat.png" alt="" width={65} height={65} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="mr-auto">
                        <Nav.Link className="btn1"><Link to="/">
                            <div className="nounderline">
                                <i className="fa fa-home fa-2x"></i>
                                <span className="btn1 d-none d-sm-inline nounderline">Home</span>
                            </div>
                        </Link></Nav.Link>
                        <Nav.Link className="btn1"><Link to="/about-us"><i className="fa fa-address-book-o fa-2x"></i>
                            <span className="d-none d-sm-inline">About Us</span>

                        </Link></Nav.Link>


                    </Nav>

                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup controlId="proj">
                            <label> </label>

                            <FormControl type="text"
                                placeholder=" Enter Project Name "
                                className="mr-sm-2"
                                value={this.state.proj}
                                onKeyDown={e => this.setState({ proj: e.target.value })} // i think we set a state because we received an input??
                                onChange={e => this.setState({ proj: e.target.value })}

                            />
                            <Link to={this.findFirstProjectId(this.state.proj)} className="mr-1 button"> Search</Link>

                        </FormGroup>
                    </Form>
                </Navbar>
            </div>
        );


    }
}

export default Header;