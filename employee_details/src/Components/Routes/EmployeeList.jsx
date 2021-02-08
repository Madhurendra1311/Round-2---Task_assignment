import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeData: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/employeeDetails")
      .then(res => {
        this.setState({
          employeeData: res.data
        })
      })
      .catch(err => console.log(err))
  }
  handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/employeeDetails/${id}`)
      .then(res => {
        alert('Delete Successfully')
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  render() {
    let employeeData = this.state.employeeData
    return (
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
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
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
                      <td><button type="button" class="btn btn-outline-success"><Link to={`/editEmployee/${item.id}`}>Edit</Link></button></td>
                      <td><button type="button" class="btn btn-outline-danger" onClick={() => this.handleDelete(item.id)}>Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          })
        }
      </div>
    )
  }
}