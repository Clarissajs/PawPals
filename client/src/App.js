import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/helloWorld.js'
import { Login } from './components/Login.js'
import { Signup } from './components/Signup.js'

class App extends Component {
  constructor() {
    super();
  }

  handleLoginSubmit(e) {
    console.log(e.target);
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

export default App;

