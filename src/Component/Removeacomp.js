import React , {useState , useEffect} from  'react'
import Mousemovercode from './Mousemovercode';

function Removeacomp() {

    const [display , setdisplay] = useState(true);
  return (
    <div>Removeacomp
        <br></br>
        <br></br>
        <button onClick={()=>setdisplay(!display)}>Toggle button (click to remove a component)</button>
        {display && <Mousemovercode/>}
    </div>
  )
}

export default Removeacomp