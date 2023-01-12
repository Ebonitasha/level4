import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <Container className="container">
            
            <div className="footer">
                <a href="http://facebook.com">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="http://github.com">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="http://youtube.com">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
                <a href="http://twitter.com">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <h5 className="follow">Follow me on social media for more content</h5>
            </div>


        </Container>
    )
}