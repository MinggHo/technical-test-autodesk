import React, { Component } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import ReactLoading from 'react-loading'

import './CardContainer.css'

export class CardContainer extends Component {
  
  state = {
    loading: true,
    apis: []
  }

  fetchApi() {
    this.setState({
      loading: true
    })
    axios
    .get('http://localhost:3000/api.json')
    .then( res => {
      setTimeout(() => {
        this.setState({
          apis: res.data,
          loading: false
        });
      }, 2000);
    })
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    if (this.state.loading) {
      return <ReactLoading type="bars" className="loading" color="green" height={'100%'} width={'100%'} />
    }
    return (
      <div className="container">
        <div className="card__container mt-md-5 mb-md-5">
          { this.state.apis.map( (api, index) => {
            return <Card {...api} key={index}></Card>
          }) 
        }
        </div>
      </div>
    )
  }
}

export default CardContainer
