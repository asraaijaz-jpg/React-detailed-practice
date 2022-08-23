import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Renderprops extends Component {
  
    constructor(props)
    {
        super(props)
        {
            this.state={
                count:0
            }
        }
    }

    counter=()=>{
        this.setState(prestate=>{
            return{count:prestate.count+1}
        })
    }


  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.counter)}
      </div>
    )
  }
}

export default Renderprops