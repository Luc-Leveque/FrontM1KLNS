import React, {Component} from 'react';
import '../assets/sass/base/_base.scss';
import '../assets/sass/layout/_Header.scss';
import image from '../assets/img/bg-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import image3 from'../assets/img/icon1.svg';
import image4 from'../assets/img/icon2.svg';
import image5 from'../assets/img/icon3.svg';
import image6 from'../assets/img/icon4.svg';
import image1 from "../assets/img/hero.png";
import image2 from "../assets/img/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


class Home extends Component {
    render() {
        return (

            <div className="home-layout">
                <section>
                    <div className="logo" style={{backgroundImage: `url(${image1}` }} >
                        <div className="row justify-content-between">
                            <div className="col-3 hlog">
                                <img src={image2}/>
                            </div>
                            <div className="col-1 hlog1">
                                <a href="/Connexion" type="button" className="btn btn-outline-dark login">Login</a>
                            </div>
                        </div>

                        <div className="col-md-3 sub" >
                            <h1>Où que vous soyez
                                Restez <span className="free">Freelance</span></h1>
                            <a href="/Inscription" type="button" className="btn btn-outline-dark inscription">Inscrivez-vous</a>

                        </div>

                        <div className="row justify-content-between">
                            <div className="col-3 hloger">
                                <a href="#" className="facebook social head">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                                </a>
                                <a href="#" className="twitter social head">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="#" className="linkedin social head">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>
                            </div>
                            <div className="col-1 hloger1">
                                <button type="button" className="btn btn-outline-dark explo">Explore <FontAwesomeIcon icon={faChevronDown} size="2px" className="chevr"/></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="global">
                        <div className="principal">Voici WeDev</div>
                        <div><h1 className="second">APPLICATION DE GESTION  <br/> DE PROJET POUR LES DEVS </h1></div>
                        <div className="col">
                            <p className="third">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                                dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod
                                non, mi.
                            </p>
                        </div>
                        <div className="container he">
                            <div className="row">
                                <div className="col"><img src={image3} alt="image3"/><p className="pf">Vos reporting <br/> centralisés</p></div>
                                <div className="col"><img src={image4} alt="image4"/><p className="pf">Le suivi de vos activités <br/> en temps réel</p></div>
                                <div className="col"><img src={image5} alt="image5"/><p className="pf">Un gain de temps <br/> pour le pilotage</p></div>
                                <div className="col"><img src={image6} alt="image6"/><p className="pf">Des utiliaires <br/> pour votre dev</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container textoter">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="marche">
                                    comment ça marche ?
                                </h3>
                                <p className="lol">
                                    Tous vos outils de dev <br/> réuni sur une <br/> seule application
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur  <br/> adipiscing elit, sed do eiusmod tempor
                                    incidiunt <br/> ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="titrer">
                                    <span className="list-number">1</span>
                                    Créer vos projets
                                </h4>
                                <p className="haha">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incidiunt ut labore et dolore magna aliqua.
                                </p>
                                <h4 className="titrer">
                                    <span className="list-number">2</span>
                                    Ajouter vos sprints
                                </h4>
                                <p className="haha">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incidiunt ut labore et dolore magna aliqua.
                                </p>
                                <h4 className="titrer">
                                    <span className="list-number">3</span>
                                    Affecter vos tâches
                                </h4>
                                <p className="haha">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incidiunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-img" style={{backgroundImage: `url(${image}` }}>
                        <div className="box">
                            <div className="content">
                                <h1>offre de lancement</h1>
                                <p>inscrivez-vous et recevez prochainement  <br/>un accès prenium à l'application WeAreData</p>
                                <div className="bute">
                                    <a href="/Inscription" type="button" className="but"> <span>je m'inscris</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
export default Home;
