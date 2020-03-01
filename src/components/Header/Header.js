import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <h1>{this.props.pageTitle}</h1>
        </div>
      </nav>
    )
  }
}

export default Header
