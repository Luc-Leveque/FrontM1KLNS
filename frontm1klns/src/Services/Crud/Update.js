import React, {Component} from 'react';
//import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Update extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeQuotePrice= this.onChangeQuotePrice.bind(this);
        this.onChangeTerminationPeriods = this.onChangeTerminationPeriods.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeStacks = this.onChangeStacks.bind(this);
        this.onChangeCostDays = this.onChangeCostDays.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            data: [],
            token : localStorage.getItem('id_token'),
            title: '',
            quotePrice: '',
            terminationPeriods: '',
            startDate:'',
            endDate:'',
            status:'',
            stacks:'',
            costDays:''

        }
        this.getProjectbyId(this.props.match.params.id);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeQuotePrice(e) {
        this.setState({
            quotePrice: e.target.value
        });
    }
    onChangeTerminationPeriods(e) {
        this.setState({
            terminationPeriods: e.target.value
        })
    }
    onChangeStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }
    onChangeEndDate(e) {
        this.setState({
            endDate: e.target.value
        })
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }
    onChangeStacks(e) {
        this.setState({
            stacks: e.target.value
        })
    }
    onChangeCostDays(e) {
        this.setState({
            costDays: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            quotePrice: this.state.quotePrice,
            terminationPeriods: this.state.terminationPeriods,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: this.state.status,
            stacks: this.state.stacks,
            costDays: this.state.costDays,
        };
       this.updateProjectFetch(this.props.match.params.id, this.state.title, this.state.quotePrice, this.state.terminationPeriods, this.state.startDate,  this.state.endDate, this.state.status, this.state.stacks, this.state.costDays);
    }

    getProjectbyId = async (id) => {
        const query = JSON.stringify({
            query: `query {
          project(
            id: "${id}"
            )
            {
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
        ).then(res => res.json())
            .then(console.log)
            .then(responseAsJson => {
                this.setState({
                    data : responseAsJson
                })
            })
            .catch(console.error);
        console.log(this.state);
    };

    updateProjectFetch = async (id, title, quotePrice, terminationPeriods, startDate, endDate, status, stacks, costDays) => {
        const query = JSON.stringify({
            query: `mutation {
          updateProject(
            id: "${id}"
            title: "${title}"
            quotePrice: "${quotePrice}"
            terminationPeriods: "${terminationPeriods}"
            startDate: "${startDate}"
            endDate: "${endDate}"
            status: "${status}"
            stacks: "${stacks}"
            costDays: "${costDays}"
            )   
            { id }
        }
    `
        });
        console.log(query);
        const response = await fetch('https://thawing-caverns-03297.herokuapp.com/graphql', {
            headers: {'content-type': 'application/json', 'Authorization': `Bearer ${this.state.token}`},
            method: 'POST',
            body: query,
        });

        const responseJson = await response.json();
        return responseJson.data;
    };


    render() {
        return (
            <form className="form row" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST" onSubmit={this.onSubmit}>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="title" name="lastName"  required="required"
                           value={this.state.title}
                           onChange={this.onChangeTitle}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Price" name="lastName"  required="required"
                           value={this.state.quotePrice}
                           onChange={this.onChangeQuotePrice}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Periods" name="lastName"  required="required"
                           value={this.state.terminationPeriods}
                           onChange={this.onChangeTerminationPeriods}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="startDate" name="lastName"  required="required"
                           value={this.state.startDate}
                           onChange={this.onChangeStartDate}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="endDate" name="lastName"  required="required"
                           value={this.state.endDate}
                           onChange={this.onChangeEndDate}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Status" name="lastName"  required="required"
                           value={this.state.status}
                           onChange={this.onChangeStatus}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Stacks" name="lastName"  required="required"
                           value={this.state.stacks}
                           onChange={this.onChangeStacks}/>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="costDays" name="lastName"  required="required"
                           value={this.state.costDays}
                           onChange={this.onChangeCostDays}/>
                </div>
                <input type="submit" id="submit" className="btn btn-lg col-md-6 " value="Sauvegarder"/>
            </form>
        )
    }
}

export default Update;