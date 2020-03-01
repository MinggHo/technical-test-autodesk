import React, { Component } from 'react'
import CardContainer from './CardContainer/CardContainer'
import Header from '../components/Header/Header'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header pageTitle='Documentation'></Header>
        <CardContainer></CardContainer>
      </div>
    )
  }
}

export default LandingPage
