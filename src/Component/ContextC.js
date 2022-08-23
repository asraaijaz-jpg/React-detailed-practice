import PropTypes from 'prop-types'
import React, { Component  , useContext , createContext} from 'react'
import ContextA from './ContextA';
import { Consumer } from './Usercontext';


function ContextC(){
    

    return (
      <div>
     <Consumer>
         {
             (username)=>{
                 return(
                     <h2>{username}</h2>
                 )
             }
         }
     </Consumer>
      </div>
    )
  
}

export default ContextC