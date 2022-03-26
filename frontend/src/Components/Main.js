import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'

export default class Main extends Component {
  render() {
    return (
      <div>
          <Switch location={window.location} key={window.location.pathname}>
              <Route exact path='/login' component={Login} />

              <Redirect to='/login' />
          </Switch>
      </div>
    )
  }
}
