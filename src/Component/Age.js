import React from 'react'

function Age(props) {

    const {husband,age,Incrementage}=props;
  return (
    <div>
        <button onClick={Incrementage}>Increment_age</button>
    </div>
  )
}

export default React.memo(Age)