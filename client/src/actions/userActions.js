const loginUser = () => {
  return {
    type: 'LOGIN_USER',
    payload: {
      request: {
        url: '/login'
      }
    }
  }
}

const signupUser = () => {
  return {
    type: 'SIGNUP_USER',
    payload: {
      request: {
        url: '/signup'
      }
    }
  }
}

export default { loginUser, signupUser };
