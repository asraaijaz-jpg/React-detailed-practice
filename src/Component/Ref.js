import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Ref extends Component {
  
  constructor()
  {
      super()
      this.inputref=React.createRef();    
  }

  componentDidMount()
      {
           this.inputref.current.focus();
      }

      clickhandler=()=>{
        // this.inputref.current.focus();
        alert(this.inputref.current.value);
      }

  render() {
    return (
      <div>
          <input type='text' ref={this.inputref}></input>
          <br></br>
          <button onClick={this.clickhandler}>Click to get the value of input through Ref</button>
      </div>
    )
  }
}

export default Ref