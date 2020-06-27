import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import {Container,Button} from 'react-bootstrap';
import './Cards.css';
import { Subscription } from 'rxjs';

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
            <Container id="cards-z">
             <MDBRow>     
              
              {/* FIRST COLUMN */}
             <MDBCol md='4'>
            { this.state.projects.map ( obj => {
                return (
                    <MDBCard>
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
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                );
            })
            }   
            </MDBCol>

            {/* SECOND COLUMN */}
            <MDBCol>
            { this.state.projects.map ( obj => {
                return (
                    <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        //src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        src={obj.images[1]}
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
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                );
            })
            }
            </MDBCol>
             
            
            {/* THIRD COLUMN */}
            <MDBCol>
            { this.state.projects.map ( obj => {
                return (
                    <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        //src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        src={obj.images[1]}
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
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                );
            })
            }
            </MDBCol>

                
                </MDBRow>
            </Container>

            
        );
    }
}

export default Cards;
