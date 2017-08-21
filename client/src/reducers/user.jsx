const defaultState = {
  
}

const user = (state=defaultState, action) => {
  
  if (action.type === 'LOGIN_SUCCESS') {
    return {...state, ...action.payload.response, isLoggedIn: true};
  }

  if (action.type === 'SIGNUP_SUCCESS') {
    return {...state, ...action.payload.response}
  }

  return state;
}

export default user