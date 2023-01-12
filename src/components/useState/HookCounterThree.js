import React, { useState } from 'react'

const HookCounterThree = () => {
  const initialState ={firstName :'',lastName:''}
  const[name,setName] = useState(initialState);  
  const fisrtNameChange =(e)=>{
     let Changedname ={
        ...name ,
        firstName:e.target.value
     };
     setName(Changedname);
  }
  const lastNameChange =(e)=>{
    let Changedname ={
        ...name ,
        lastName:e.target.value
    };
    setName(Changedname);
  }
  return (
    <div>
        <input type="text" value={name.firstName} onChange={(e)=>fisrtNameChange(e)} ></input>
        <input type="text" value={name.lastName} onChange={(e)=>lastNameChange(e)} ></input>
        <h1>FirstName is -{name.firstName}</h1>
        <h1>LastName is -{name.lastName}</h1>
    </div>
  )
}

export default HookCounterThree