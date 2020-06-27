import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';
import './HomePage.css';
import Cards from  '../components/Cards';


class HomePage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <>
            <Jumbotron></Jumbotron>
            <Cards></Cards>
            <Carousel> </Carousel>
        </>;

    }
}

export default HomePage;