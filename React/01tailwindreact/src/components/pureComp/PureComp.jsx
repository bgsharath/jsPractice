import React, { Component, PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render(props) {
    console.log('Pure component render')
    return (
      <div>PureComp{props}</div>
    )
  }
}
