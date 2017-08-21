const loginUser = (loginFormData) => {
  console.log(loginFormData)
  return {
    type: ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAIL'],
    payload: {
      request: {
        url: '/login',
        method: 'post',
        data: loginFormData
      }
    }
  }
}

const signupUser = (signupFormData) => {
  return {
    type: ['SIGNUP','SIGNUP_SUCCESS', 'SIGNUP_FAIL'],
    payload: {
      request: {
        url: '/signup',
        method: 'post',
        data: signupFormData
      }
    }
  }
}

export default { loginUser, signupUser };
