import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'

export class Postrequest extends Component {


    constructor()
    {
        super()
        this.state={
            id:'',
            name:'',
            body:''
        }
    }

    changehandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submithandler=e=>{
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(response)
        .catch(error=>{
            console.log(error);
        })
        })
    }

  render() {

    const {id , name , body}=this.state;

    return (
      <div>
          <form onSubmit={this.submithandler}>
              <input type='text' name='id' value={id} onChange={this.changehandler} placeholder='id'/>
              <br></br>
              <input type='text' name='name' value={name} onChange={this.changehandler} placeholder='name'/>
              <br></br>
              <input type='text' name='body' value={body} onChange={this.changehandler} placeholder='body'/>
              <br></br>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

export default Postrequest