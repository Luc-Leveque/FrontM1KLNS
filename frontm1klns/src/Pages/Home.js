import React, {Component} from 'react';
import '../assets/sass/base/_base.scss';
import image from '../assets/img/bg-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() {
        return (
            <div className="home-layout">
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
                                <button className="button">
                                    <span>je m'inscris</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
export default Home;
