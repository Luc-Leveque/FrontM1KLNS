import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class index extends Component {
    constructor(props) {
        super(props);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeFirstName= this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            password:''
        }
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:5000/signup', obj)
            .then(res => console.log(res.data));
        this.setState({
            lastName: '',
            firstName: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (
        <div className="inscription-layout">
            <section>
                <div className="container form-content">
                        <div className="card-header">
                            <h3 className="mt-2"> Inscription </h3>
                        </div>
                            <form className="form row" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST" onSubmit={this.onSubmit} >
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faUser} className="fa" size="2x" />
                                    <input type="text" className="form-control" placeholder="Nom" name="lastName"  required="required"
                                           value={this.state.lastName}
                                           onChange={this.onChangeLastName}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faUser} className="fa" size="2x" />
                                    <input type="text" className="form-control" placeholder="Prénom" name="firstName" required="required"
                                           value={this.state.firstName}
                                           onChange={this.onChangeFirstName}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa" size="2x" />
                                    <input type="email" className="form-control" placeholder="Email" name="email" required="required"
                                           value={this.state.email}
                                           onChange={this.onChangeEmail}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faLock} className="fa" size="2x" />
                                    <input type="password" className="form-control" placeholder="Mot de passe" name="password" required="required"
                                           value={this.state.password}
                                           onChange={this.onChangePassword}/>
                                </div>
                                <input type="submit" id="submit" className="btn btn-lg col-md-6 " value="S'inscrire"/>
                                <br/>
                                <div className="col-md-12 co">
                                    <a href="../Connexion">
                                        Se connecter
                                    </a>
                                </div>

                            </form>
                </div>
            </section>
        </div>
    );

    }
}

export default index;