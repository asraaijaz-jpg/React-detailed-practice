import React from 'react'

function Take_mul_component_in_one_comp(props) {
    
    const {handleclick,children , text}=props;
  return (
    <div>
        <button onClick={handleclick}>{text}</button>
        {/* {children} */}
    </div>
  )
}

export default React.memo(Take_mul_component_in_one_comp)