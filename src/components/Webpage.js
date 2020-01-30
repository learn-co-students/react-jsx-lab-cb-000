import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'FillerText' from './FillerText.js';

export class Webpage extends Component {
  render() {
    return (
      <div>
        <h1>The world&#39;s coolest webpage</>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}
