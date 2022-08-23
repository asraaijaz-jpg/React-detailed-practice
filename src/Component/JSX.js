import React , {Component} from "react";
import { ReactDOM } from "react";

// const JSX=()=>{
//     return(
//         <div>
//             <h1>Hello come from JSX</h1>
//         </div>
//     )
// }

const JSX=()=>{
    return React.createElement('div',{id:'hello' , className:'dummy'},
    React.createElement('h1',null,'Come from createlement'))
}

export default JSX;