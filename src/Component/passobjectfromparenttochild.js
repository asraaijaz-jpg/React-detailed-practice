import React from 'react'

function passobjectfromparenttochild(props) {

  return (
   
    // <div>{props.person.age} {props.person.name} {props.person.skill} {props.person.id}</div>
    <div>{props.person}</div>
  )
}

export default passobjectfromparenttochild