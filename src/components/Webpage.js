import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
import FillerText from './FillerText';


// Define these exported classes
export default class Webpage extends Component {
  // this function should return the JSX we want the DOM to render
  render() {
    return (
     <div>
      <title>The world's coolest webpage</title>
	<FillerText />
	<FillerText />
     </div>
    )
  }
}


//ReactDOM.render(
  //Webpage,
  //document.getElementById('global')
//);

