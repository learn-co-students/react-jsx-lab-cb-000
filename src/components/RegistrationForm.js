import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
