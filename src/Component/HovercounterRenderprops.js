import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class HovercounterRenderprops extends Component {

  render() {
    const {count,counter}=this.props
    return (
      <div>
          <br></br>
          <h3>Hover counter HOC</h3>
           <h5 onMouseOver={counter}>Asra Mouse Hover {count} times</h5>
          </div>
    )
  }
}

export default HovercounterRenderprops