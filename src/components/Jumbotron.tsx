import React from 'react';
import Typing from 'react-typing-animation';
import './Jumbotron.css';

class Jumbotron extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="jumbotron" id="laalu">
                    <Typing>
                          <p id="heading-text">CERNSPACE WEB</p>
                    </Typing>
                </div>
           
        );
    }

}

export default Jumbotron;