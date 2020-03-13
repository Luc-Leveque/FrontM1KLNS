import React, {Component} from 'react';
import '../assets/sass/layout/_Header.scss';
import image1 from '../assets/img/hero.png';
import image2 from '../assets/img/logo.svg';
import twitter from '../assets/img/twitter.png'
import facebook from '../assets/img/facebook.png'
import linkedin from '../assets/img/linkedin.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



class Header extends Component {
    render() {
        return (
            <div className="logo" style={{backgroundImage: `url(${image1}` }} >
               <div className="row justify-content-between">
                       <div className="col-3 hlog">
                           <img src={image2}/>
                       </div>
                       <div className="col-1 hlog1">
                           <button type="button" class="btn btn-outline-dark login">Login</button>
                       </div>
                </div>

                <div className="col-md-3" >
                    <h1>Où que vous soyez
                    Restez <span className="free">Freelance</span></h1>
                    <button type="button" class="btn btn-outline-dark inscription">Inscrivez-vous</button>
                </div>


            </div>



        );
    }
}

export default Header;
