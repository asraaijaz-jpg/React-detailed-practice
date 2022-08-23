import React , {useState , useEffect} from 'react'

function Automatictimer() {

    const [timer , settimer]=useState(0);

    const tick=()=>{
        settimer(pretimer=>pretimer+1);
        // settimer(timer+1)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return()=>{
            clearInterval(interval);
        }
    },[])

    
  return (
    <div>automatictimer
        <br></br>
        {timer}
    </div>
  )
}

export default Automatictimer