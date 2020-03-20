import React, {Component} from 'react';

class Taches extends Component {
    render() {
        return (
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Liste des <b>Tâches</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"/>+</button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Un titre</th>
                            <th>Une description</th>
                            <th>Un statut</th>
                            <th>Temps de réalisation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
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
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Taches;