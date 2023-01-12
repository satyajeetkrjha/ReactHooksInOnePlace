import React, { useEffect, useState } from 'react'


const HookMouse = () => {
  
  const[x,setX] = useState(0);
  const[y,setY] = useState(0);  

  /*
   If you want to use useEffect as componentDidMount then jsut call it with no dependency and if 
   we use return statement inside useEffect ,we are basically doing componentDidUnmount
   and this is cleanup code
  */

  const logMousePosition =(e)=>{
    console.log('mouse movement')
    setX(e.clientX);
    setY(e.clientY);
  }
  useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    // cleanup or componentwillunmount part
    return ()=> {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    };
	}, []);

  return (
    <div>
       <h1>Hooks -X {x}</h1> 
       <h1>Hooks -Y {y}</h1>
    </div>
  )
}

export default HookMouse