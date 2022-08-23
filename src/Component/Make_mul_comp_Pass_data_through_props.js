import React , {useEffect , useState , useContext} from 'react'
import Salary from './Salary';
import Age from './Age';
import Take_mul_component_in_one_comp from './Take_mul_component_in_one_comp';

function Make_mul_comp_Pass_data_through_props() {

    const [age,setage]=useState(25);
    const [salary,setsalary]=useState(1000);

    const Incrementage=()=>{
        setage(age+1);
    }

    const Incrementsalary=()=>{
        setsalary(salary+1);
    }
    
    const isEvensalary=()=>
    {
        return salary%2 === 0;
    }

    const isEvensage=()=>
    {
        return age%2 === 0;
    }

  return (
    <div>Make_mul_comp_Pass_data_through_props
        <h3>Age - {age} {isEvensage() ? 'Even' : 'Odd'}</h3>
        <Age husband='Furqan' age={age} Incrementage={Incrementage}/>
        {/* <button onClick={()=>setage(preage=>(preage+1))}>Increment Age</button> */}

        <h3>Salary - {salary} {isEvensalary() ? 'Even' : 'Odd'}</h3>
        <Salary name='Asra' salary={salary} Incrementsalary={Incrementsalary}/>
        {/* <button onClick={()=>setsalary(presalary=>(presalary+500))}>Increment Salary</button> */}

        <br></br>
        <h3>Same functionality but in different and unique way</h3>

        <h3>Age - {age}</h3>
        <Take_mul_component_in_one_comp handleclick={Incrementage} text='Increment_age'/>
        <h3>Salary - {salary}</h3>
        <Take_mul_component_in_one_comp handleclick={Incrementsalary} text='Increment_salary'/>

        
    </div>
  )
}

export default Make_mul_comp_Pass_data_through_props