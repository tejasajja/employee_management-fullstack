import React,{Component} from "react";
import EmployeeServices from "../services/EmployeeServices";


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);


    }

    componentDidMount() {

        if(this.state.id == -1){
            return
        }else {
            EmployeeServices.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email
                });
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        if (this.state.id ==-1 ){
            EmployeeServices.createEmployee(employee).then(res=>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeServices.updateEmployeeById(employee,this.state.id).then( res =>
            {this.props.history.push('/employees');
            });

        }
    }

    cancel() {
        this.props.history.push('/employees');
    }
    getTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center"> Add Employee</h3>
        }else{
            return <h3 className="text-center"> Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                        <label> Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                        <label> First Name</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel}
                                            style={{marginLeft: "10px"}}> Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default CreateEmployeeComponent;
