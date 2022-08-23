import React from 'react'

function Salary(props) {

    const {name,salary,Incrementsalary}=props;
  return (
      
    <div> 
        <button onClick={Incrementsalary}>Increment_salary</button>
    </div>
  )
}

export default React.memo(Salary)