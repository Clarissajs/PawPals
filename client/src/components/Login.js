import React from 'react';
import { Input, Form, FormGroup, Button, Col } from 'reactstrap';

class Login extends React.Component {

  render() {
    return (
      <div>
        <h2 style={{
          marginBottom: 15
        }}>Login View</h2>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
          
            <Col xs={{size: 10, offset: 1}}>
              <Input name='username' type='username' id='usernameField' placeholder='Username'/>
            </Col>

            <Col xs={{size: 10, offset: 1}}>
              <Input name="password" type='password' id='passwordField' placeholder='Password' />
              <p>Forgot your password?</p>
            </Col>

            <Button>Submit</Button>

          </FormGroup>
        </Form>
      </div>
    )
  }
}

export { Login };