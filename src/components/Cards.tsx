import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import {Container,Button} from 'react-bootstrap';
import { Subscription } from 'rxjs';
import { Link, Redirect, useHistory } from 'react-router-dom';

import './Cards.css';

class Cards extends React.Component {
    

    
    state = {
        projects: []
    };
    projectsSub$: Subscription = new Subscription();
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const projectsService = window['cernspace'];
        
        this.projectsSub$ = projectsService.projects$.subscribe((data) => {
            this.setState({ projects : data });
        });
 
    }

    componentWillUnmount() {   
        this.projectsSub$.unsubscribe();
    }

    
    render() {
        return (
            
            <Container>
             <MDBRow className="card-z">     
              
            { this.state.projects.map ( obj => {
                return (
                
                
                <MDBCol md='4' className="mb-4 d-flex" >

                    <MDBCard className="card-z " >
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src={obj.images[0]}
                        alt='Project image'
                    />

                    <MDBCardBody cascade className='text-center '>
                        <MDBCardTitle className='card-title'>
                        <strong>{obj.name}</strong>
                        </MDBCardTitle>

                        <MDBCardText>
                        <p className='blue-text'>{obj.shortDescription}</p>
                        </MDBCardText>
                        
                        
                        <Link to={'/project/'+ obj._id}>
                            <Button className="align-self-end primary-btn">Project Page</Button>
                            </Link>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>  
                
                );
            })
            }   
                
                </MDBRow>
                </Container>
           

            
        );
    }
}

export default Cards;
