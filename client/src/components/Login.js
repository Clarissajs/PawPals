import React from 'react'
import { Input, Form, FormGroup, Button, Col } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import userActions from '../actions/userActions.js'

const adapter = (props) => (
    <Input {...props.input} placeholder={props.placeholder} type={props.type}/>
)

class Login extends React.Component {

  handleSubmit(values) {
    console.log(values)
    // this.props.loginUser();
  }

  render() {
    return (
      <div>
        <h2 style={{
          marginBottom: 15
        }}>Login</h2>
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
          <FormGroup>
          
            <Col xs={{size: 10, offset: 1}}>
              <Field name='username' type='text' placeholder='Username' component={adapter}/>
            </Col>

            <Col xs={{size: 10, offset: 1}}>
              <Field name="password" type='password' placeholder='Password' component={adapter}/>
              <p>Forgot your password?</p>
            </Col>

            <Button type='submit'>Submit</Button>

          </FormGroup>
        </Form>
      </div>
    )
  }
}

// Connect Login to redux store

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(userActions.loginUser());
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login = reduxForm({form: 'login'})(Login);

export { Login };