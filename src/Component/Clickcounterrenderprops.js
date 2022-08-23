import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClickcounterRenderprops extends Component {
  
  render() {
      const {count,counter}=this.props
    return (
      <div>
          <h3>Click counter HOC</h3>
      <button onClick={counter}>Asra Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickcounterRenderprops