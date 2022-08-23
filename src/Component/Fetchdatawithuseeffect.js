import React , {useState , useEffect } from 'react';
import axios from 'axios';

function Fetchdatawithuseeffect() {

    const [mulposts , mulsetposts] = useState([])
    const [singleposts , singlesetposts] = useState({})
    const [id,setid] = useState(1);
    const [btn , setbtn] = useState(1);


    const fetchpost=()=>{
        setbtn(id);
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
             singlesetposts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[btn])

   
  return (
    <div>Fetchdatawithuseeffect
<br></br><br></br>
get data after inserting its ID
<br></br><br></br>
        <input type='text' name='id' value={id} onChange={e=>setid(e.target.value)}/>
        <button onClick={fetchpost}>Fetch post</button>
        <br></br>
        <div>{singleposts.title}</div>
        {/* <ul>
            {mulposts.map(item=>
              <li key={item.id}>{item.title}</li>
            )}
        </ul> */}
    </div>
  )
}

export default Fetchdatawithuseeffect