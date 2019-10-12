import React, { Component } from 'react'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        test
        {this.props.children}
        testasf
      </div>
    )
  }
}
