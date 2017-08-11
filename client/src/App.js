import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { HelloWorld } from './components/helloWorld.js'
import { Login } from './components/Login.js'
import { Signup } from './components/Signup.js'

class App extends Component {

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
        <div style={{fontSize: 7}}>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;

