import React from 'react'

function Errorboundary({heroname}) {
    if(heroname === 'joker')
    {
        throw new Error('Not a hero');
    }
  return (
    <div>{heroname}</div>
  )
}

export default Errorboundary