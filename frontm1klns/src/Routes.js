import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Home from './Pages/Home';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}

export default withRouter(Routes);