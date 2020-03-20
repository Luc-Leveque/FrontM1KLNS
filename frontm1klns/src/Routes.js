import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

import Home from './Pages/Home';
import Projets from './Pages/Projets';
import Taches from './Pages/Projets';

import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import UsersList from './components/UsersList';


class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Projets" component={Projets}/>
                <Route exact path="/Taches" component={Taches}/>

                <Route exact path="/Connexion" component={Connexion}/>
                <Route exact path="/Inscription" component={Inscription}/>
                <Route exact path="/UsersList" component={UsersList}/>

            </div>
        );
    }
}

export default withRouter(Routes);