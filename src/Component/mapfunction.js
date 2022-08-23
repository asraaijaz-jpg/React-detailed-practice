import React from 'react';
import Passobjectfromparenttochild from './passobjectfromparenttochild';

function mapfunction() {

    const array1=['Asra','Fatima','Fizza','Bushra','Sadia','Farhan']
    const mapfunusing=array1.map(names => <h1>{names}</h1>) 
    
    const arrayobject=[
        {
            name:'asra',
            age:23,
            skill:'Angular'
        },
        {
            name:'dua',
            age:24,
            skill:'Reactjs'
        },
        {
            name:'awaiz',
            age:25,
            skill:'Node'
        },

    ]

const listofobjects= arrayobject.map((person,index)=><p> My id is {index} . I am {person.name} .
My age is {person.age} and my skillset is {person.skill}</p>)

// const personlist= arrayobject.map(person=><Passobjectfromparenttochild person={person}/>)




  return (
    <div>
        {/* {mapfunusing} */}
        {/* {listofobjects } */}
        {/* {personlist} */}
        <Passobjectfromparenttochild person={listofobjects}/>
    </div>
  )
}
export default mapfunction