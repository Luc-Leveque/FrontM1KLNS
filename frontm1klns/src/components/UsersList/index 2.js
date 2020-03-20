import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const index = (props) => {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menum navbar navbar-light navbar-expand-md justify-content-center fixed">
                        <div className="container">

                            <div className="navbar-collapse collapse justify-content-between align-items-center w-100"
                                 id="collapsingNavbar2">
                                <ul className="topBotomBordersOut navbar-nav mx-auto text-center">
                                    <Link className="nav-item active" to="/Clients">clients</Link>
                                    <Link className="nav-item"><a className="nav-link" href="/Clients">Clients</a></Link>
                                    <Link className="nav-item"><a className="nav-link" href="/Sprints">Sprints</a></Link>
                                    <Link className="nav-item"><a className="nav-link" href="/Taches">Tâches</a></Link>
                                </ul>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
}

export default index;