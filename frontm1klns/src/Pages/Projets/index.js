import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



class index extends Component {
    render() {
        return (
                <div className="table-wrapper table-responsive">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Liste des <b>Clients</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"/>+</button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover ">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Dénomination sociale</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Nom du contact</th>
                            <th scope="col">Prénom du contact</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i
                                    className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i
                                    className="material-icons"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i
                                    className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i
                                    className="material-icons"></i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

        );
    }
}

export default index;