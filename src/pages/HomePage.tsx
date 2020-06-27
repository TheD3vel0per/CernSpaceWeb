import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import './HomePage.css';
import Cards from '../components/Cards';
import { Subscription } from 'rxjs';

class HomePage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    

    render() {
        return (
            <>
                
                    <Jumbotron></Jumbotron>
                    <div className="cardsBackground">
                    <Cards></Cards>
                    </div>


                
            </>
        );

    }
}

export default HomePage;