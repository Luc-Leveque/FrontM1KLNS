import React, {Component} from 'react';
import '../assets/sass/layout/_Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                    <div className="col-md-6">
                        <p className="foot"> copyright 2020 </p>
                    </div>
                    <div className="col-md-3">
                        <a href="#" className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="#" className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;