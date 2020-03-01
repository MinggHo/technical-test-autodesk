import React, { Component } from 'react'
import Header from '../Header/Header'

export class DummyPage extends Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.location.pathname}></Header>
        <h1>This is dummy page for {this.props.location.pathname}</h1>
      </div>
    )
  }
}

export default DummyPage
