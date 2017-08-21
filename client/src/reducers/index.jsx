import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import ui from './ui'
import listings from './listings'

const reducer = combineReducers({
  user: user,
  form: formReducer,
  ui: ui,
  listings: listings
});

export default reducer;