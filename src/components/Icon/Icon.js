import React, { Component } from 'react'

export class Icon extends Component {
  render() {
    const availableIcons = ['system','default'];
    let iconName = this.props.iconName ? this.props.iconName : 'default'
    iconName = availableIcons.includes(iconName) ? iconName : 'default'
    return (
      <span>
        <img src={`../svg/${iconName}.svg`}></img>
      </span>
    )
  }
}

export default Icon
