import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Errorhandling extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            haserror:false
        }
    }

    //this method catch error and something back in terms of fallback UI
    // If there is an error with one product that it is not crashed the whole app 
    // but point out the specific one and rest of the thing would work properly
    static getDerivedStateFromError(error)
    {
        return{
        haserror:true
        }
    }

    componentDidCatch(error, info)
    {
        console.log(error);
        console.log(info);
    }

  render() {
    if(this.state.haserror)
    {
        return<h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default Errorhandling