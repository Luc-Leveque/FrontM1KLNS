import React, {Component} from 'react';
import '../assets/sass/base/_base.scss';
import image from '../assets/img/bg-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//import MainTitle from '../components/MainTitle';
//import UsersList from '../components/UsersList';


class Home extends Component {
    render() {
        return (
            <div className="home-layout">
                <section>
                    <div className="row">
                        <div className="col-md-6">
                            <p>hnhj</p>
                        </div>
                        <div className="col-md-6">
                            <p>jda</p>
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