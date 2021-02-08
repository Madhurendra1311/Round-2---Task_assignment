import React, { Component } from 'react'
import axios from "axios";

export default class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            name: "",
            email: "",
            phone: "",
            dob: "",
            gender: "",
            hobbies: "",
            employeeData: []
        }
    }

    addSubmit = (e) => {
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
        axios({
            method: 'POST',
            url: "http://localhost:3000/employeeDetails",
            data: payload
        })
            .then(res => {
                if (res.data.id) {
                    this.setState({ employeeData: [...this.state.employeeData, payload] })
                }
            })
            .catch(err => console.log('error', err))
    }

    render() {
        const { employeeData } = this.state
        // console.log(employeeData)
        return (
            <>
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
                        </div><br />
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.addSubmit}>Add Employee</button>
                    </form>
                </div>
                <div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobbies</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        employeeData && employeeData.map(item => {
                            return (
                                <>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row" key={item.id}>{item.name}</th>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.hobbies}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            )
                        })

                    }
                </div>
            </>
        )
    }
}
