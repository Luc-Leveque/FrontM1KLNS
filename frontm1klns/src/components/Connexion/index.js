import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import AuthService from '../../Services/AuthService';


class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/Userslist');
    }
    render() {
        return (
        <div className="connexion-layout">
            <section>
                <form>
                    <div className="container connect">
                        <img src="http://previews.123rf.com/images/stodolskaya/stodolskaya1511/stodolskaya151100027/49219342-Connexion-de-l-utilisateur-ou-l-acc-s-authentification-ic-ne-Banque-d'images.jpg" className="avatar" alt="avatar"/>
                        <div className="form-input">
                            <FontAwesomeIcon icon={faUser} className="fa-user" size="2x" />
                            <input id="email" name="email" type="email" placeholder="Entrez votre identifiant" required="required" onChange={this.handleChange}/>
                        </div>
                        <div className="form-input">
                            <FontAwesomeIcon icon={faLock} className="fa-lock" size="2x" />
                            <input id="password" name="password" type="password" placeholder="Entrez votre mot de passe" required="required"  onChange={this.handleChange}/>
                        </div>
                        <input type="submit" id="submit" value="Se Connecter" onClick={this.handleFormSubmit}/>
                        <br/>
                        <div className="ins">
                            <a href="../Inscription">
                                S'inscrire
                            </a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        );
    }
    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
                this.props.history.replace('/UsersList');
            })
            .catch(err =>{
                alert(err);
            })
    }
}

export default Login;