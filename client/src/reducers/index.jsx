import { combineReducers } from 'redux'
import user from './user.jsx'

const store = combineReducers({
  user: user
});

export default store;