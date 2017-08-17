import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user.jsx'

const store = combineReducers({
  user: user,
  form: formReducer
});

export default store;