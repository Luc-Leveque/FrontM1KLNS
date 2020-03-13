import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Connexion" component={Connexion}/>
                <Route exact path="/Inscription" component={Inscription}/>
            </div>
        );
    }
}

export default withRouter(Routes);