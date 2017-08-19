import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import ui from './ui'

const reducer = combineReducers({
  user: user,
  form: formReducer,
  ui: ui
});

export default reducer;