import React , {useReducer , useEffect } from 'react';
import axios from 'axios'

const initialvalue={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_FAILED':
            return {
                loading:true,
                post:{},
                error:'Something went Wrong'
            }
        default:
            return state;
    }
}

function Call_API_using_useReducer_and_useEffect() {

    const [fetchAPI , dispatch]=useReducer(reducer,initialvalue);

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
            dispatch({type:'FETCH_SUCCESS' , payload:response.data})
        })
        .catch((error)=>{
            dispatch({type:'FETCH_FAILED'})
        })
    },[])


  return (
    <div>Call_API_using_useReducer_and_useEffect
        <br></br>
        {fetchAPI.loading ? "Loading" : fetchAPI.post.title}
        {fetchAPI.error ? fetchAPI.error : "null"}

       </div>
  )
}

export default Call_API_using_useReducer_and_useEffect