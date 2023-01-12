import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

import {faFacebook, faTwitter, faInstagram, faSnapchat } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){

    return(
        <footer>
            <div className="contact">
                <div className="one">
                    <h5 className="four">Follow us on Social Media for visuals of our servies and free workshops</h5>
                </div>    
                <div className="two">
                    <h5 className="five">Call to schedule your FREE consultation (713) 633-5533</h5>
                </div>
                <div className="three">
                    <h5 className="six">Serving all folks in or around the Houston area</h5>
                </div>
            </div>
            <Container>
            
        <div className="icon social-media">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://snapchat.com">
                <FontAwesomeIcon icon={faSnapchat} />
            </a>

        </div>
            </Container>
        </footer>
    )
}