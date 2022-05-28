import React, { Component } from 'react'
import axios from 'axios'

export default class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect_var: false,
      first_name: '',
      last_name: '',
      age: -1,
      designation: -1,
      public_hash: '',
      hospital_name: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    let target = event.target
    let name = target.name
    let value = target.value

    this.setState({
      [name]: value,
    })
  }

  async componentDidMount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })

        this.setState({
          public_hash: accounts[0]
        })
      }
      catch (error) {
        alert("Error Connecting...")
      }
    }
    else {
      alert("Please install metamast extention")
    }
  }

  handleSubmit(event) {
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      public_hash: this.state.public_hash,
      designation: this.state.designation,
      hospital_name: this.state.hospital_name,
    }

    axios.post("/api/registerHandler", data)
      .then((response) => {
        console.log(JSON.stringify(response))
      })
      .catch((error) => {
        alert("Error in registering... ", JSON.stringify(error))
      })
  }

  render() {
    let hospital_name_var
    if (this.state.designation === 'doctor') {
      hospital_name_var = <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="age">Hospital Name:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="hospital" placeholder="Enter Hospital Name" name="Enter Hospital Name" onChange={this.handleInputChange} required />
        </div>
      </div>
    }
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Medygon</a>
            </div>
            {/* Collect the nav uinks, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="./index.html">Login</a>
                </li>
                <li className="active">
                  <a href="./register.html">Register</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
        <div className="container">
          <div className="panel gradient-background">
            <div className="panel-heading">
              <h3 className="text-center">Please enter your details to register.</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="alert alert-warning col-sm-8 col-sm-offset-2" style={{ display: 'none' }}>
                  <strong>Warning!</strong> Invalid public key. Please enter a valid public key to register.
                </div>
                <div className="alert alert-info col-sm-8 col-sm-offset-2" style={{ display: 'none' }}>
                  <strong>Info!</strong> User already registered. Please check your details.
                </div>
              </div>
              <form name="registerForm" className="form-horizontal" action="./doctor.html">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">First Name:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="name" placeholder="Enter First name" name="first_name" onChange={this.handleInputChange} required autoFocus />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">Last Name:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="name" placeholder="Enter Last name" name="last_name" onChange={this.handleInputChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="age">Age:</label>
                  <div className="col-sm-8">
                    <input type="age" className="form-control" id="age" placeholder="Enter age" name="age" onChange={this.handleInputChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="designation" className="control-label col-sm-2">Registering as</label>
                  <div className="col-sm-8">
                    <select className="form-control" id="designation" name='designation' onChange={this.handleInputChange} required>
                      <option>-- Please Select --</option>
                      <option value={"patient"}>Patient</option>
                      <option value={'doctor'}>Doctor</option>
                    </select>
                  </div>
                </div>
                {hospital_name_var}
              </form>
              <div className="text-center">
                <button className="btn draw-border" onClick={this.handleSubmit}>Register</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

    )
  }
}
