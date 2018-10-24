import React from 'react';

class RegistrationForm extends React.component {
  render() {
    return (
      <form>
        <input type="text" name="name"/>
        <inout type="password" name="password"/>
        <button type="submit" value="submit"/>
      </form>
    )
  }
}

export default RegistrationForm;
