import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import './HomePage.css';
import Cards from '../components/Cards';
import { Subscription } from 'rxjs';
import { Container } from 'react-bootstrap';
import Typing from 'react-typing-animation';

class HomePage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    

    render() {
        return (
            <>
               
                <div className="jumbotron" id="laalu" >
                    <Typing>
                          {/*<p id="heading-text">CERN WEB</p>*/}
                          <h1 id="heading-text" className="neon"> Welcome to CERNSpace Web. </h1>
                          

                    </Typing> 
                    </div>
                      
                    <div className="cardsBackground">
                        <Cards></Cards>
                    </div>
                      
  
                
            </>
        );

    }
}

export default HomePage;