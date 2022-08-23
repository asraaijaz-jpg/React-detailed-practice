import React from "react";
import { ReactDOM } from "react";

// function Funcmp()
// {
// return<h1>Hello Asra come from functional component</h1>
// }

const Funcmp = ({propname}) => {
    // Destructing
    // const{propname}=props

    function showalert()
    {
        alert('hello');
    }

return(
    <div>
<h1>Come from fat arrow function through prop {propname}</h1>
{/* {props.children} */}
<button onClick={showalert}>Click me</button>
</div>
)}

// export function but with the exact same name
// export const Funcmp = ()=><h1>Come from fat arrow function</h1>

export default Funcmp;