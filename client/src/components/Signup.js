import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Label, Form, FormGroup, Button, Col } from 'reactstrap';

class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2 style={{
          marginBottom: 15
        }}>Signup View</h2>
        <Form>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Input type='email' id='emailField' placeholder='Email'/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Input type='text' id='firstNameField' placeholder='First Name'/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Input type='text' id='lastNameField' placeholder='Last Name'/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Input type='password' id='passwordField' placeholder='Password'/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col xs={{size: 10, offset: 1}}>
              <Input type='password' id='passwordField' placeholder='Confirm Password'/>
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

export { Signup };