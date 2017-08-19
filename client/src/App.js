import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { HelloWorld } from './components/helloWorld.js'
import { Login } from './components/Login.js'
import { Signup } from './components/Signup.js'
import { NavBar } from './components/NavBar'
import { UserProfile } from './components/UserProfile'
import Listings from './components/Listings'
import userActions from './actions/userActions.js'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' component={HelloWorld} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/listings' component={Listings} />
            <Route exact path='/profile' component={UserProfile} />            
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
