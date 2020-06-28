import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
        
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3 ">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://webfest.cern/"> CernSpace Web </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;