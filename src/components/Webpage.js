import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Webpage extends Component {
  render() {
    return (
      <h1>The world{`'`}s coolest webpage</h1>
      <FillerText />
      <FillerText />
    )
  }
}
