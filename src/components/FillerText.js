import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!


// Define these exported classes
export default class FillerText extends Component {
  // this function should return the JSX we want the DOM to render
  render() {
    return (
        <p>I am a filler text. I can be used to fill your screen. Amazing!</p>
    )
  }
}


//ReactDOM.render(
  //FillerText,
  //document.getElementById('global')
//);

