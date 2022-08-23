import React , {useReducer , useContext} from 'react'
import {contextusing} from '../App';

function CompA_useReducer_useContext_sharecounterValueInAllComp() {
    const contextconsuming=useContext(contextusing);

  return (
    <div>CompA_useReducer_useContext_sharecounterValueInAllComp_A {contextconsuming.globalcount}
   
    <br></br>
    <button onClick={()=>contextconsuming.globaldispatch('increment')}>Increment</button>
    <button onClick={()=>contextconsuming.globaldispatch('decrement')}>Decrement</button>
    <button onClick={()=>contextconsuming.globaldispatch('reset')}>Reset</button>

    </div>
  )
}

export default CompA_useReducer_useContext_sharecounterValueInAllComp