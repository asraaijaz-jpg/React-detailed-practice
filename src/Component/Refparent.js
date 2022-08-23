import React, { Component } from 'react';
import Refchild from './Refchild';

export class Refparent extends Component {
  
    constructor()
    {
        super()
        this.parentref=React.createRef();
    }

    
    clickhandler=()=>{
    this.parentref.current.focusInput();
    }

  render() {
    return (
      <div>
          <Refchild ref={this.parentref}/>
          <button onClick={this.clickhandler}>Get focus to child from parent through Ref</button>
      </div>
    )
  }
}

export default Refparent