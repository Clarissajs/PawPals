import React from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

class UserProfile extends React.Component {
  render() {
    return (
      <Container>
        <img src='http://via.placeholder.com/250x250' style={{
          width: '50%',
          borderRadius: '100%',
          marginTop: '10%',
          marginBottom: '5%'
        }}/>
        <h3>{this.props.name}</h3>
        <h6>{this.props.email}</h6>
        <h6 style={{marginBottom: 15}}>555-555-5555</h6>
        <hr />
        <p style={{textAlign: 'left', margin: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Container>
    )
  }
}

// Connect UserProfile to redux store

const mapStateToProps = state => state.user;

UserProfile = connect(
  mapStateToProps
)(UserProfile);

export { UserProfile }