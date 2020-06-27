import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import {Container,Button} from 'react-bootstrap';
import './Cards.css';

class Cards extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="cards-z">
             <MDBRow>     
             <MDBCol md='4'>
                    <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        alt='man'
                    />

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                        <strong>Billy Coleman</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Wev developer</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        alt='man'
                    />

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                        <strong>Billy Coleman</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Wev developer</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard>
                    <MDBCardImage
                        hover
                        overlay='white-light'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
                        alt='man'
                    />

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                        <strong>Billy Coleman</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Wev developer</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                        <Button variant="primary">Go somewhere</Button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </Container>

            
        );
    }
}

export default Cards;
