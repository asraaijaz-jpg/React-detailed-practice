import React , {useReducer} from 'react'


 ////////////////////////////////////////One way of using usereducer//////////////////////////////////////////////

// const initialvalue=0;
// const reducer=(state , action)=>{
//     switch(action)
//     {
//     case 'increment':
//        return state+1;
//     case 'decrement':
//        return state-1;  
//     case 'reset':
//        return initialvalue; 
//     default:
//         return state;   
//     }
// }
// function CounterwithUseReducer() {

//     const [count , dispatch]=useReducer(reducer , initialvalue)
//   return (
//     <div>
//         Counter_with_UseReducer
//         <h4>Count value {count} </h4>
//         <button onClick={()=>dispatch('increment')}>Increment</button>
//         <button onClick={()=>dispatch('decrement')}>Decrement</button>
//         <button onClick={()=>dispatch('reset')}>Reset</button>
//     </div>
//   )
// }


///////////////////////////////////////////////Second way of usereducer/////////////////////////////////////////////

const initialvalue={
    countervalue:0,
    countervalue2:10
}
const reducer=(state , action)=>{
    switch(action.type)
    {
    case 'increment1':
       return {...state,countervalue:state.countervalue+action.value};
    case 'decrement1':
       return {...state,countervalue:state.countervalue-action.value}  
    case 'increment2':
       return {...state,countervalue2:state.countervalue2+action.value};
    case 'decrement2':
       return {...state,countervalue2:state.countervalue2-action.value}  
    case 'reset':
       return initialvalue; 
    default:
        return state;   
    }
}
function CounterwithUseReducer() {

    const [count , dispatch]=useReducer(reducer , initialvalue)
  return (
    <div>
        Counter_with_UseReducer
        <h4>Counter 1 value {count.countervalue} </h4>
        <h4>Counter 2 value {count.countervalue2} </h4>
        <button onClick={()=>dispatch({type:'increment1' , value:1})}>Increment1</button>
        <button onClick={()=>dispatch({type:'decrement1', value:1})}>Decrement1</button>

      
        <button onClick={()=>dispatch({type:'increment1' , value:5})}>Increment1 by 5</button>
        <button onClick={()=>dispatch({type:'decrement1', value:5})}>Decrement1 by 5</button>

        <br></br><br></br>

        <button onClick={()=>dispatch({type:'increment2' , value:1})}>Increment2</button>
        <button onClick={()=>dispatch({type:'decrement2', value:1})}>Decrement2</button>

        <br></br><br></br>

        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}


export default CounterwithUseReducer

// UseReducer

// count is used to store the value of current state of action

// dispatch is a function once it is call , it father call reducer function , dispatch take one argument
// that is action parameter used in reducer function (either increment , decrement , reset)

// initialvalue that is used to tell the reducer function its initial state

// reducer method take two parameter initial state of action and action that is performed