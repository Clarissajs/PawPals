import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import './index.css'

import StatefulApp from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers/index'

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json'
});

const store = createStore(
  reducer,
  // TODO: remove for deployment
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    axiosMiddleware(client)
  )
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <StatefulApp />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
