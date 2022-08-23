import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HOC from './HOC';

export class HovercounterHOC extends Component {

  render() {
    const {count,counter,name}=this.props
    return (
      <div>
          <br></br>
          <h3>Hover counter HOC</h3>
           <h5 onMouseOver={counter}>{name} Mouse Hover {count} times</h5>
           <p>{this.props.remainingprops()}</p>
          </div>
    )
  }
}

export default HOC(HovercounterHOC,5)