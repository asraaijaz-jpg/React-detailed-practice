import PropTypes from 'prop-types'
import React, { Component , useContext , createContext} from 'react'
import ContextB from './ContextB';
import ContextC from './ContextC';

function ContextA (){
  
    const UserContext = createContext();

    return (
      <div>
          <ContextB/>
      </div>
    )
  
}

export default ContextA