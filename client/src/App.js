import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { HelloWorld } from './components/helloWorld.js'
import { Login } from './components/Login.js'
import { Signup } from './components/Signup.js'
import userActions from './actions/userActions.js'

class App extends React.Component {
  componentWillMount() {
    // this.props.loginUser(); //TODO: remove
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>PawPals</h2>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={HelloWorld} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

// Connect App to redux store

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(userActions.loginUser());
    }
  }
}

const StatefulApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default StatefulApp
