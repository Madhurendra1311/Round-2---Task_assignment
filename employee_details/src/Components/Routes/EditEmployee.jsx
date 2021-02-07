import React, { Component } from 'react'
import axios from 'axios'

export default class EditTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email:"",
            phone: "",
            dob: "",
            gender: "",
            hobbies: [],
        }
    }
    componentDidMount = ()=>{
        axios
            .get(`http://localhost:3000/employeeDetails/${this.props.match.params.id}`)
            .then(res=>{
                this.setState({
                    name:res.data.name,
                    email:res.data.email,
                    phone:res.data.phone,
                    dob:res.data.dob,
                    gender:res.data.gender,
                    hobbies: res.data.hobbies
                })
            })
            .catch(err=>console.log(err))
    }

    editEmployeeDetails = (e) => {
        e.preventDefault()
        const {name,email,phone,dob,gender,hobbies} = this.state
        let payload = {
            name: name,
            email: email,
            phone: phone,
            dob:dob,
            gender:gender,
            hobbies: hobbies
        }
        fetch( `http://localhost:3000/employeeDetails/${this.props.match.params.id}`,{
            method:'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        
        .then(res=>{
            alert('Edit Successfully')
            this.props.history.push('/allEmployee')
        }
    )
        .catch(err=>console.log('error',err))
    }

    render() {
        return (
            <div>
                <form>
                        <input placeholder="Name" value={this.state.name} type="text" onChange={(e)=> this.setState({name: e.target.value})} /><br/>
                        <input placeholder="Email" value={this.state.email} type="email" onChange={(e)=> this.setState({email: e.target.value})} /><br/>
                        <input placeholder="Phone" value={this.state.phone} type="number" onChange={(e)=> this.setState({phone: e.target.value})} /><br/>
                        <input placeholder="Dob" value={this.state.dob} type="date" onChange={(e)=> this.setState({dob: e.target.value})} /><br/>
                        {/* <input placeholder="gender" value={this.state.gender} type="text" onChange={(e)=> this.setState({gender: e.target.value})} /><br/> */}
                        <input type="radio" id="male" name="gender" value="male" onChange={(e)=> this.setState({gender: e.target.value})}/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" onChange={(e)=> this.setState({gender: e.target.value})}/>
                        <label for="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" onChange={(e)=> this.setState({gender: e.target.value})}/>
                        <label for="other">Other</label>
                        {/* <input placeholder="hobbies" value={this.state.hobbies} type="text" onChange={(e)=> this.setState({hobbies: e.target.value})} /><br/> */}
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Cricket" onChange={(e)=> this.setState({hobbies:[...this.state.hobbies, e.target.value]})} />
                        <label for="vehicle1"> Cricket</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Football" onChange={(e)=> this.setState({hobbies:[...this.state.hobbies, e.target.value]})} />
                        <label for="vehicle2"> Football</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Travelling" onChange={(e)=> this.setState({hobbies:[...this.state.hobbies, e.target.value]})} />
                        <label for="vehicle3"> Travelling</label>
                        <button onClick={this.editEmployeeDetails}>Edit EmployeeDetails</button>
                    </form>
            </div>
        )
    }
}