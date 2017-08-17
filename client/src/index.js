import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import StatefulApp from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers/index'

const store = createStore(
  reducer,
  // TODO: remove for deployment
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <StatefulApp />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
