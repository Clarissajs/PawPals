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

export default { loginUser };
