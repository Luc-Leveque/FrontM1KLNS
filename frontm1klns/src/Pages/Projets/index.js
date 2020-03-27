import React, {Component} from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class index extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            data: [],
            token : localStorage.getItem('id_token')
        }
        this.getProjectFetch()
        this.deleteProjectFetch()

    }


     getProjectFetch = async () => {
        const query = JSON.stringify({
            query: `query
        {projects
            {
            id, 
            title, 
            quotePrice,
            terminationPeriods,
            startDate,
            endDate,
            status,
            stacks,
            costDays, 
             }
         }
    `
        });

        fetch('https://thawing-caverns-03297.herokuapp.com/graphql', {
                headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.state.token}`},
                method: 'POST',
                body: query,
            }
        ).then((resp)=> resp.json())
            .then((data)=> this.setState({data:data}))
             .catch((err)=> console.log(err))
    }
    deleteProjectFetch = async (id) => {
        const query = JSON.stringify({
            query: `mutation {
          deleteProject(
            id: "${id}"   
        }
    `
        });

        const response = await fetch('https://thawing-caverns-03297.herokuapp.com/graphql', {
            headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.state.token}`},
            method: 'POST',
            body: query,
        });

        const responseJson = await response.json();
        return responseJson.data;
    };



    renderTableData() {

        if (
            this.state.data.data

        )
        {
            return this.state.data.data.projects.map((project, index) => {
                const {id, title, quotePrice, terminationPeriods, startDate, endDate, status, stacks, costDays, Actions } = project;
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{quotePrice}</td>
                        <td>{terminationPeriods}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{status}</td>
                        <td>{stacks}</td>
                        <td>{costDays}</td>
                        <td>
                            <Link to={`/Update/${id}`}>Edit</Link>
                            <br/>
                            <Link onClick={`${id}`}>Delete</Link>
                        </td>
                    </tr>
                )
            })
        }
        return "";

    }
    renderTableHeader() {
        if (
            this.state.data.data
        ){
            let header = Object.keys(this.state.data.data.projects[0])
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

    }



    render() {
        return (

        <div>
            <h1 id='title'>Liste des <b>Clients</b></h1>
            <table id='project'>
                <tbody>
                <tr>{this.renderTableHeader()}
                <th>Actions</th></tr>
                {this.renderTableData()}

                </tbody>
            </table>
        </div>
        );
    }
}

export default index;