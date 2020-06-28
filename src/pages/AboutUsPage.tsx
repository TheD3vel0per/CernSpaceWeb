import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import { Container } from 'react-bootstrap';
import './AboutUs.css';
import Header from '../components/Header';
import Typing from 'react-typing-animation';


class AboutUsPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="jumbotron" id="laalu">
          <Typing>
            <p id="heading-text">OUR TEAM</p>
          </Typing>
        </div>
        <div>
          <Container >
            <MDBCard className="my-5 px-1 pb-5 text-center">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4" className="mb-md-0 mb-5">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                      className="rounded z-depth-1-half img-fluid"
                      alt="Sample avatar"
                    />
                    <h4 className="font-weight-bold dark-grey-text my-4">
                      Maria Kate
              </h4>
                    <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <MDBBtn
                      tag="a"
                      floating
                      size="sm"
                      className="mx-1 mb-0 btn-dribbble"
                    >
                      <MDBIcon fab icon="dribbble" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol md="4" className="mb-md-0 mb-5">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                      className="rounded z-depth-1-half img-fluid"
                      alt="Sample avatar"
                    />
                    <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
                    <h6 className="text-uppercase grey-text mb-3">
                      Front-end Developer
              </h6>
                    <MDBBtn
                      tag="a"
                      floating
                      size="sm"
                      className="mx-1 mb-0 btn-email"
                    >
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                      <MDBIcon fab icon="github" />
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol md="4" className="mb-md-0 mb-5">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                      className="rounded z-depth-1-half img-fluid"
                      alt="Sample avatar"
                    />
                    <h4 className="font-weight-bold dark-grey-text my-4">
                      Sarah Melyah
              </h4>
                    <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                      <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                      <MDBIcon fab icon="pinterest" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </Container>
        </div>
      </>
    );

  }
}

export default AboutUsPage;