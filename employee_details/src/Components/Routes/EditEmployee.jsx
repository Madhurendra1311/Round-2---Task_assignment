import React, { Component } from 'react'
import axios from 'axios'

export default class EditTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            dob: "",
            gender: "",
            hobbies: "",
        }
    }
    componentDidMount = () => {
        axios
            .get(`http://localhost:3000/employeeDetails/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                    dob: res.data.dob,
                    gender: res.data.gender,
                    hobbies: res.data.hobbies
                })
            })
            .catch(err => console.log(err))
    }

    editEmployeeDetails = (e) => {
        e.preventDefault()
        const { name, email, phone, dob, gender, hobbies } = this.state
        let payload = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            gender: gender,
            hobbies: hobbies
        }
        fetch(`http://localhost:3000/employeeDetails/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())

            .then(res => {
                alert('Edit Successfully')
                this.props.history.push('/allEmployee')
            }
            )
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <div>
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">NAME</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" value={this.state.name} type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input class="form-control" placeholder="Email" aria-label="Name" aria-describedby="basic-addon1" value={this.state.email} type="email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Phone</span>
                        </div>
                        <input class="form-control" aria-label="Name" aria-describedby="basic-addon1" placeholder="Phone" type="number" onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">DOB</span>
                        </div>
                        <input class="form-control" aria-label="Name" aria-describedby="basic-addon1" placeholder="Dob" value={this.state.dob} type="date" onChange={(e) => this.setState({ dob: e.target.value })} />
                    </div>

                    {/* <input placeholder="gender" value={this.state.gender} type="text" onChange={(e)=> this.setState({gender: e.target.value})} /><br/> */}
                    <h5>Select Gender</h5>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="male" onChange={(e) => this.setState({ gender: e.target.value })} />
                        <label class="form-check-label" for="exampleRadios1">
                            Male
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="female" onChange={(e) => this.setState({ gender: e.target.value })} />
                        <label class="form-check-label" for="exampleRadios1">
                            Female
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="other" value="other" onChange={(e) => this.setState({ gender: e.target.value })} />
                        <label class="form-check-label" for="exampleRadios1">
                            Others
                        </label>
                    </div>
                    {/* <input placeholder="hobbies" value={this.state.hobbies} type="text" onChange={(e)=> this.setState({hobbies: e.target.value})} /><br/> */}
                    <h5>Hobbies</h5>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Cricket" onChange={(e) => this.setState({ hobbies: e.target.value })} />
                        <label class="form-check-label" for="inlineCheckbox1">Cricket</label>
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.editEmployeeDetails}>Edit EmployeeDetails</button>
                </form>
            </div>
        )
    }
}





