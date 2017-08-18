const defaultState = {
  username: null,
  isLoggedIn: false,
}

const user = (state=defaultState, action) => {
  
  if (action.type === 'LOGIN_USER') {
    return {...state, isLoggedIn: true};
  }

  return state;
}

export default user