import React from 'react';
import { Input, Form, FormGroup, Button, Col, Container } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Promise from 'bluebird'

import userActions from '../actions/userActions'
import CustomInput from './CustomInput'

class Signup extends React.Component {

  handleSubmit(userData) {
    this.props.signupUser(userData);
  }

  render() {
    return (
      <Container style={{marginTop:20}}>
        <h2>Welcome!</h2>
        <h6 style={{
          marginBottom: 15
        }}>Complete the form below to join PawPals</h6>
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='email' type='email' placeholder='Email' component={CustomInput}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='firstName' type='text' placeholder='First Name' component={CustomInput}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='lastName' type='text' placeholder='Last Name' component={CustomInput}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='password' type='password' placeholder='Password' component={CustomInput}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='confirmPassword' type='password' placeholder='Confirm Password' component={CustomInput}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Button className='submitButton'>Signup</Button>
            </Col>
          </FormGroup>

        </Form>
      </Container>
    )
  }
}

// Connect Signup to redux store

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (userData) => {
      return dispatch(userActions.signupUser(userData));
    }
  }
}

Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

Signup = reduxForm({form: 'Signup'})(Signup);

export { Signup };