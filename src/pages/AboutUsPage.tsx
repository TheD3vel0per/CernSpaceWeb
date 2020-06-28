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
        <div className="jumbotron" id="laalu" >
          <Typing>
            {/*<p id="heading-text">CERN WEB</p>*/}
            <h1 id="heading-text" className="neon"> Meet Our Team </h1>
          </Typing>
        </div>
        <div>
          <section id="team" className="pb-5">
            <div className="container">
              <div className="row">
                {/* Devam */}
                <div data-aos='zoom-out' className="col-sm-6">
                  <div className="image-flip">
                    <div className="mainflip flip-0">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className="img-fluid" src="/images/headshots/devam.jpg" alt="card image" /></p>
                            <h4 className="card-title">Devam Sisodraker</h4>
                            <p className="card-text">I’m Devam, a second year Math & Computer Science student at UBC with a passion for software engineering.</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">Ever since I was a toddler, I have been passionate about technology. I want to make the world as passionate about technology as I am by showing people how to use it to solve problems.</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/d3vel0per/">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://devam.io">
                                  <i className="fa fa-external-link" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./Devam */}

                {/* Vishal */}
                <div data-aos='zoom-out' className="col-sm-6">
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className=" img-fluid" src="/images/headshots/vishal.jpg" alt="card image" /></p>
                            <h4 className="card-title">Vishal Desh</h4>
                            <p className="card-text">Hi, I am Vishal Desh currently pursuing Computer Science at UBC.</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">I am passionate about robotics and software development to create a positive impact in the world. I aspire to start my own robotics company. </p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="mailto: emailtovishy@gmail.com">
                                  <i className="fa fa-google" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="http://vishaldesh.com/">
                                  <i className="fa fa-external-link" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Noah */}
                <div className="col-sm-6">
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className=" img-fluid" src="/images/headshots/noah.jpg" alt="card image" /></p>
                            <h4 className="card-title">Noah Caleanu</h4>
                            <p className="card-text">UBC Electrical Engineer 2020</p>
                            <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">Interest in sustainable technology and interplanetery travel. I enjoyed this hackathon, I learned Javascript and React.</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/noah-caleanu-871662135/">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./Noah */}

                {/* Sidharth */}
                <div data-aos='zoom-out' className="col-sm-6">
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className="img-fluid" src="/images/headshots/Sid.jpg" alt="card image" /></p>
                            <h4 className="card-title">Sidharth Grover</h4>
                            <p className="card-text">Hey, I'm Sidharth! I'm a 2nd Year Computer Science and Statistics Student at UBC.</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">I consider myself as a person who’s logically minded, yet creative at heart. My vision remains to effectively maneuver my capabilities to use my knowledge through the commixture of workable solutions and innovative technology that naturally fit into a superior world.</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/sidharth-grover/">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://github.com/Sid10501">
                                  <i className="fa fa-external-link" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./Sidharth */}

                {/* Ansh */}
                <div className="col-sm-6">
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className=" img-fluid" src="/images/headshots/ansh.jpg" alt="card image" /></p>
                            <h4 className="card-title">Ansh Gandhi</h4>
                            <p className="card-text">Computer Science and Statistics student at UBC, Class of 2023.  </p>

                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">Learning front-end development. Used this opportunity to apply my CSS, Javascript and Bootstrap skills.
                            "Declare variables not war."</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/ansh-gandhi17/">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="https://github.com/anshgandhi17">
                                  <i className="fa fa-external-link" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ./Ansh */}
              </div>
            </div>
          </section>

        </div>
      </>
    );

  }
}

export default AboutUsPage;