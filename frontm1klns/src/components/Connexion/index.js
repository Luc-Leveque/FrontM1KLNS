import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const index = (props) => {
    return(
        <div className="connexion-layout">
            <section>
                <form>
                    <div className="container">
                        <img src="http://previews.123rf.com/images/stodolskaya/stodolskaya1511/stodolskaya151100027/49219342-Connexion-de-l-utilisateur-ou-l-acc-s-authentification-ic-ne-Banque-d'images.jpg" className="avatar" alt="avatar"/>
                        <div className="form-input">
                            <i className="fa fa-user fa-2x" aria-hidden="true">
                            </i>
                            <input type="text" placeholder="Entrez votre nom" required=""/>
                        </div>
                        <div className="form-input">
                            <i className="fa fa-lock fa-2x" aria-hidden="true">
                            </i>
                            <input type="password" placeholder="Entrez votre mot de passe" required=""/>
                        </div>
                        <input type="submit" id="submit" value="Se Connecter"/><br/>
                        <a href="#">
                            Mot de passe oublié?
                        </a>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default index;