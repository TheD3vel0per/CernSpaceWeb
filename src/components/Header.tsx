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
        
    }

    componentDidMount() {
        const projectsService = window['cernspace'];
        
        this.projectsSub$ = projectsService.projects$.subscribe((data) => {
            //console.log(data[0]);
            this.setState({ projects : data });
        });
 
    }

    componentWillUnmount() {
         
        this.projectsSub$.unsubscribe();
        
    }
    

    handleSubmit = async (event) => {
        event.preventDefault();

        // implement filtering here
        if (this.state.proj === ""){
            alert("ERROR. No project entered.");
        }
        else
            alert("Project ID "+ this.state.proj +" is being searched."); // PRINTS THE THING YOU ENTER IN THE PAGE
           
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
  
    render() {

        
            return (
            <Navbar bg="dark" variant="dark" className="navbar navbar-inverse " fixed="top">

                <Navbar.Brand href="#home">CernSpace Web</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto" id="allLinks">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
                        

                    </Nav>

                    <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="proj">
                        <label> </label>
                    
                        <FormControl type="text" 
                                    placeholder=" Project Name " 
                                    className="mr-sm-2" 
                                    value = {this.state.proj}
                                    onChange={e => this.setState({proj: e.target.value})} 
                                    />
                        <Link to={ this.findFirstProjectId(this.state.proj)} className="button" >Search</Link>
                    
                    </FormGroup>
                    </Form>

                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Header;