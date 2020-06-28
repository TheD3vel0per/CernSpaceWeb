import React from 'react';
import {Container, Card, CardDeck, Button, ImageProps, } from 'react-bootstrap';
import './ProjectCards.css';
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";
import { Link } from 'react-router-dom';
import { Subscription } from 'rxjs';



class ProjectCards extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    projects: []
  };
  projectsSub$: Subscription = new Subscription();

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
      
      <Container id="wrapperBoy" >
      <MDBRow  >        
          {this.state.projects.map (obj => {
            return (

            <MDBCol md='3' className=' mb-4 m-4'>
            <MDBCard
            className='card-image'
            style={{
              backgroundImage: "holder.js/160px100"
            }}>
            
            <div className='text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='pink-text'>
                  <MDBIcon icon='chart-pie' />
                  <strong>{obj.name}</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>{obj.name}</strong>
                </h3>
                <p className='pb-3'>
                {obj.shortDescription}
                </p>
                <Button variant="primary">View Project</Button>
              </div>
            </div>
            </MDBCard>
            </MDBCol>

            );

          } ) }
        
        
      </MDBRow>
      </Container>
      
        );
}
}
export default ProjectCards;
