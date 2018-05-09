import React from 'react';

class RegistrationForm extends React.Component {
  render(){
    return (
      <form action="#" method="POST">
        <label forHTML="username">Email</label>
        <input id="username" type="text" />

        <label forHTML="password">Password</label>
        <input id="password" type="password" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
