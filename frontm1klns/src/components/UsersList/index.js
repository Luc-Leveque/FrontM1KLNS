import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
//import {Link} from "react-router-dom";
import AuthService from '../../Services/AuthService';
import withAuth from '../../Services/withAuth';
const Auth = new AuthService();

class Navigation extends Component {
    render() {
        return (
            <section>
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menum navbar navbar-light navbar-expand-md justify-content-center fixed">
                        <div className="container">

                            <div className="navbar-collapse collapse justify-content-between align-items-center w-100"
                                 id="collapsingNavbar2">
                                <ul className="topBotomBordersOut navbar-nav mx-auto text-center">
                                    <li className="nav-item active"><a className="nav-link" href="/Projets">Projets</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Clients">Clients</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Sprints">Sprints</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Taches">Tâches</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Taches">Tâches</a></li>
                                    <h2>Welcome {this.props.user.username}</h2>
                                    <p className="App-intro">
                                        <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </section>

        );

    }
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/Connexion');
    }
}

export default withAuth(Navigation);