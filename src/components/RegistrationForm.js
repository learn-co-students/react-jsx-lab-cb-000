import React from 'react'
import ReactDOM from 'react-dom'

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type='text' /><br>
        <input type='password' /><br>
        <input type="submit" value="Submit" />
      </form>
      );
  }
}

export default RegistrationForm