import React from 'react'

function child(props) {
  return (
    <div>
        <button onClick={()=>props.passmethodasprop('and then From child to parent')}> Greet Parent from child</button>
    </div>
  )
}

export default child