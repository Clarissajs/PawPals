import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}

export { HelloWorld };