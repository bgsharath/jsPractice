import React, { Component } from 'react'

export default class RegularComp extends Component {
  render(props) {
    console.log('Regular component render')
    return (
      <div>RegularComp{props}</div>
    )
  }
}
