import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HOC from './HOC';

export class ClickcounterHOC extends Component {
  
  render() {
      const {count,counter,name}=this.props
    return (
      <div>
      <h3>Click counter HOC</h3>
      <button onClick={counter}>{name} Clicked {count} times</button>
      <p>{this.props.remainingprops()}</p>
      </div>
    )
  }
}

export default HOC(ClickcounterHOC,10)