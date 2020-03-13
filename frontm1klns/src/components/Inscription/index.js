import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faEnvelope, faLock, faPhoneAlt, faUser} from "@fortawesome/free-solid-svg-icons";

const index = (props) => {
    return(
        <div className="inscription-layout">
            <section>
                <div className="container form-content">
                        <div className="card-header">
                            <h3 className="mt-2"> Inscription </h3>
                        </div>
                            <form className="form row" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faUser} className="fa" size="2x" />
                                    <input type="text" className="form-control" placeholder="Nom" name="" id="uname1" required="required"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa" size="2x" />
                                    <input type="email" className="form-control" placeholder="Mail" name="" required="required"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faLock} className="fa" size="2x" />
                                    <input type="password" className="form-control" placeholder="Mot de passe" name="" required="required"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <FontAwesomeIcon icon={faLock} className="fa" size="2x" />
                                    <input type="password" className="form-control" placeholder="Confirmation mot de passe" name="" required="required"/>
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
    )
}

export default index;