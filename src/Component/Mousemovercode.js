import React , {useState , useEffect} from 'react'

function Mousemovercode() {
    const [X,setX] = useState(0);
    const [Y,setY] = useState(0);
    
    
    const detectmousemovement=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }
    
    useEffect(()=>{
    console.log('Use effect called when mouse move');
    window.addEventListener('mousemove',detectmousemovement);

 return( ()=> {
console.log('completely cleanup code');
window.removeEventListener('mousemove',detectmousemovement);
 })

    },[])

    return(
        <div>
            <h3>`X movement {X} , Y movement {Y}`</h3>
        </div>
    )
       
}

export default Mousemovercode