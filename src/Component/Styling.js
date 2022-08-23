import React from 'react'
import './stylesheet.css';


const inlinestyling={
    color:'orange',
    fontSize:'80px'
}

function Styling(props) {

    const conrendclass=props.condiononapplycss?'primary':'';
   

  return (
      <div>
    <h1 className={`${conrendclass} fontsize`}>Change my style from external file</h1>
    <h1 style={inlinestyling}>Change my inlinestyle</h1>
    </div>
  )
}

export default Styling