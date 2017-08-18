import React from 'react';
import { Input, Form, FormGroup, Button, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import userActions from '../actions/userActions'
import CustomInput from './CustomInput'

class Signup extends React.Component {

  handleSubmit(userData) {
    this.props.signupUser(userData);
  }

  render() {
    return (
      <div>
        <h2 style={{
          marginBottom: 15
        }}>Signup</h2>
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Field name='username' type='username' placeholder='Username' component={CustomInput}/>
            </Col>
          </FormGroup>

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
              <Button>Submit</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }
}

// Connect Signup to redux store

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (userData) => {
      dispatch(userActions.signupUser(userData));
    }
  }
}

Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

Signup = reduxForm({form: 'Signup'})(Signup);

export { Signup };