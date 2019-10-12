import React, { Component } from 'react'
import Header from './Header/Header'
import TopMenu from './TopMenu/TopMenu'
import Footer from './Footer/Footer'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopMenu />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
