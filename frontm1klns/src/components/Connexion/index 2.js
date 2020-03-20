import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import * as actionCreators from '../../actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        const redirectRoute = this.props.location.query.next || '/Connexion';
        this.state = {
            email: '',
            password: '',
            redirectTo: redirectRoute
        };
    }
    login(e) {
        e.preventDefault();
        this.props.actions.loginUser(this.state.email, this.state.password, this.state.redirectTo);
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
                            <input id="email" name="email" type="email" placeholder="Entrez votre identifiant" required="required" valueLink={this.linkState('email')}/>
                        </div>
                        <div className="form-input">
                            <FontAwesomeIcon icon={faLock} className="fa-lock" size="2x" />
                            <input id="password" name="password" type="password" placeholder="Entrez votre mot de passe" required="required"  valueLink={this.linkState('password')}/>
                        </div>
                        <input type="submit" id="submit" value="Se Connecter"  disabled={this.props.isAuthenticating} onClick={this.login.bind(this)}/>
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
}
reactMixin(Login.prototype, React.addons.LinkedStateMixin);

const mapStateToProps = (state) => ({
    isAuthenticating   : state.auth.isAuthenticating,
    statusText         : state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
