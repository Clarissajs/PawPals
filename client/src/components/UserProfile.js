import React from 'react'

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <img src='http://via.placeholder.com/250x250' style={{
          width: '50%',
          borderRadius: '100%',
          marginTop: '10%',
          marginBottom: '5%'
        }}/>
        <h3>firstName lastName</h3>
        <h6>someEmail@gmail.com</h6>

      </div>
    )
  }
}

export { UserProfile }