import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios';

export class Getrequest extends Component {
  
    constructor()
    {
        super()
        this.state={
        listofgetrequest:[]
        }
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({listofgetrequest:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }

  render() {

    const {listofgetrequest}=this.state;
    return (
      <div>
      {
          listofgetrequest.length?
          listofgetrequest.map(listofgetrequest=> <div>{listofgetrequest.id}      {listofgetrequest.title}</div>):
          null
      }
      </div>
    )
  }
}

export default Getrequest