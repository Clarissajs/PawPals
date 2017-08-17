import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user.jsx'

const reducer = combineReducers({
  user: user,
  form: formReducer
});

export default reducer;