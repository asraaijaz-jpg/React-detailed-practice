import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Refchild extends Component {
  
    constructor()
    {
        super()
        this.childref=React.createRef();
    }

    focusInput()
    {
     this.childref.current.focus();
    }

  render() {
    return (
      <div>
          <input type='text' ref={this.childref}></input>
      </div>
    )
  }
}

export default Refchild