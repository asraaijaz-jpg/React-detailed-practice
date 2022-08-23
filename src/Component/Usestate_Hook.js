import React , {useState , useEffect} from 'react'

function Usestate_Hook()
 {


    // **************************************************************** usestate with array value
    
    // const [items , setitems] = useState([])    
    // const addItem = () =>{
    // setitems([...items,{
    //     id:items.length,
    //     value:Math.floor(Math.random()*10)+1
    //  }])
    // }


    // return(
    //     <div>
    //         <button onClick={addItem}>Add items</button>
    //         {
    //             <ul>
    //             {items.map(itemvalue=>(
    //             <li key={itemvalue.id}>{itemvalue.value}</li>
    //             ))}
    //             </ul>
    //         }

    //     </div>
    // )

    //***************************************************************************** */ usestate with object value

    //  const [name , setname] =useState({fname:'' , lname:''})
    // return(
    // <div>
    // <input type='text' name='fname' onChange={(e)=>setname({...name,fname:e.target.value})}/>
    // <br></br><br></br>
    // <input type='text' name='lname' onChange={(e)=>setname({...name,lname:e.target.value})}/>
    // <br></br><br></br>
    // <h3>Your first name is {name.fname}</h3>
    // <h3>Your last name is {name.lname}</h3>
    // <h3>{JSON.stringify(name)}</h3>
    // </div>
    // )

                                      
    //  ***********************************************************************usestate with simple value

//      const initialvalue=0;
//      const [count , setcount] = useState(initialvalue);
//      const [name , setname] = useState('');

//      useEffect(()=>{
//          console.log('Updating document title');
//         document.title=`You clicked ${count} times`;
//     },[count])

//     //???????????????????????????????????????????????????? this useeffect update if the count value is updated

//   return (
//     <div>
//         Usestate_Hook
//         <br></br>
//         <br></br>
//         <input type='text' name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
//         <br></br>
//         <br></br>
//         Count : {count}   &nbsp;&nbsp;&nbsp;
//         <button onClick={()=>setcount(initialvalue)}>Reset </button>
//         <button onClick={()=>setcount(prestate=>prestate+1)}>Increment </button>
//         <button onClick={()=>setcount(prestate=>prestate+5)}>Increment by 5 </button>
//         <button onClick={()=>setcount(prestate=>prestate-1)}>Decrement </button>
//     </div>
//   )

// ****************************************************************find the mouse moving position

// const [X,setX] = useState(0);
// const [Y,setY] = useState(0);


// const detectmousemovement=(e)=>{
//     setX(e.clientX);
//     setY(e.clientY);
// }

// useEffect(()=>{
// console.log('Use effect called when mouse move');
// window.addEventListener('mousemove',detectmousemovement);
// },[])
// return(
//     <div>
//         <h3>`X movement {X} , Y movement {Y}`</h3>
//     </div>
// )
    

}

export default Usestate_Hook