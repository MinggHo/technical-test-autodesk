import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './Card.css'

export class Card extends Component {

  render() {
    const { title, descriptions, iconName, links } = this.props
    return (
      <div className="card__item">
        <div className="card__details">
          <Icon iconName={iconName}></Icon>
          <h1 className="mb-3 ml-3">{ title }</h1>
          <p>{ descriptions }</p>
        </div>
        <ul className="card__links">
          { links.map( (link, index) => {
            return <li key={index}><a href={link.pageUrl}>{link.pageTitle}</a></li>
          })}
        </ul>
      </div>
    )
  }
}

export default Card
