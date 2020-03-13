import React, {Component} from 'react';
import '../assets/sass/layout/_Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from '../assets/img/logo-footer.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-3" >
                        <img src={log} className="log" alt="log"/>
                    </div>
                    <div className="col-6">
                        <p className="foot"> copyright 2020 </p>
                    </div>
                    <div className="col-3">
                        <a href="#" className="facebook social">
                            <FontAwesomeIcon icon={faFacebookF} size="2x" />
                        </a>
                        <a href="#" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="#" className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;