import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Connexion from './components/Connexion';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Connexion" component={Connexion}/>
            </div>
        );
    }
}

export default withRouter(Routes);