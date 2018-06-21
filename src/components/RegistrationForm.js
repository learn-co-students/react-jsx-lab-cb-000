import React from 'react';
import ReactDOM from 'react-dom';

  class RegistrationForm extends React.Component{
  render(){
    return(
      <form>
      <input type="text" name="userName"></input>
      <input type="password" name="password"></input>
      <button type="submit" value="submit"></button>
      </form>
    )
  }
}

export default RegistrationForm;
