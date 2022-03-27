import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {Login} from "./Login.js"
import Patient from "./Patient.js"
import Register from "./Register.js"
import Doctor from "./Doctor.js"

export default class Main extends Component {
  render() {
    return (
      <div>
          <Switch location={window.location} key={window.location.pathname}>
              <Route exact path='/login' component={Login} />
              <Route exact path='/patient' component={Patient} />
              <Route exact path='/doctor' component={Doctor} />
              <Route exact path='/register' component={Register} />

              <Redirect to='/login' />
          </Switch>
      </div>
    )
  }
}
