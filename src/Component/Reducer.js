import React from 'react'

function Reducer() {
    const array1=[1,2,3,4,5];
    const reducer=(accumulator,currentvalue)=>accumulator+currentvalue;

    const result1=array1.reduce(reducer);
    // 0 is initial value of accumulator and then rest array value become the current value and add in accumulator
    
    const result2=array1.reduce(reducer,5); 
    // 5 is initial value of accumulator and then rest array value become the current value and add in accumulator
 
    return (
    <div>
       Usage of Reducer function that is used in javascript
     <h3>{result1}</h3>
     <h3>{result2}</h3>
    </div>
  )
}

export default Reducer