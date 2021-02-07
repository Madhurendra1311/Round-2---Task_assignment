import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        employeeData:[]
    }
  }

  componentDidMount(){
    axios
    .get("http://localhost:3000/employeeDetails")
    .then(res=>{
        this.setState({
            employeeData:res.data
        })
    })
    .catch(err=>console.log(err))
}
handleDelete = (id)=>{
  axios
  .delete(`http://localhost:3000/employeeDetails/${id}`)
  .then(res=>{
    alert('Delete Successfully')
    window.location.reload()
  })
  .catch(err=>console.log(err))
}

  render() {
    let employeeData = this.state.employeeData
    return (
      <div>
            {
                employeeData && employeeData.length > 0? employeeData.map(item=>(
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div key={item.id}>{item.name}</div>
                    <div key={item.id}>{item.email}</div>
                    <div key={item.id}>{item.phone}</div>
                    <div key={item.id}>{item.gender}</div>
                    <div key={item.id}>{item.hobbies}</div>
                    <div key={item.id}>{item.dob}</div>
                    <div><button><Link to={`/editEmployee/${item.id}`}>Edit</Link></button></div>
                    <div><button onClick={()=>this.handleDelete(item.id)}>Delete</button></div>
                    </div>
                    ))
                :
                <h3>No tasks Available</h3>
              }
      </div>
    )
  }
}