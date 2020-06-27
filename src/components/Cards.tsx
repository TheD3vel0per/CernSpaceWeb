import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import {Container,Button} from 'react-bootstrap';
import { Subscription } from 'rxjs';
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
            //console.log(data[0]);
            this.setState({ projects : data });
        });
 
    }

    componentWillUnmount() {
         
        this.projectsSub$.unsubscribe();
        
    }

    render() {
        return (
            
             <MDBRow>     
              
              

            { this.state.projects.map ( obj => {
                return (
                   
                <MDBCol md='3' className='ml-3 mb-4 m-4'>

                    <MDBCard className="card-z" >
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        //src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        src={obj.images[0]}
                        alt='Project image'
                    />

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                        <strong>{obj.name}</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>{obj.shortDescription}</p>

                        <MDBCardText>
                        {obj.longDescription}.{' '}
                        </MDBCardText>
                        <Button variant="primary">View Project</Button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>  
                );
            })
            }   
                
                </MDBRow>
            

            
        );
    }
}

export default Cards;
