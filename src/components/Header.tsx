import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav, Form, FormControl } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className="navbar navbar-inverse " fixed="top">

                <Navbar.Brand href="#home">Cern SpaceWeb</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto" id="allLinks">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
                        <Nav.Link><Link to="/project/C6GImveKtTCopJYtk0ec">Single Project Page</Link></Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Header;