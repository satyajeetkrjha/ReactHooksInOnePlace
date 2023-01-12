import React, { useEffect, useState ,useRef} from 'react'

function HookTimer() {
  const [timer,setTimer] = useState(0);
  const intervalRef = useRef();
  const increment =()=>{
     setTimer((timer) => timer+1);
  }
  useEffect(()=>{
       intervalRef.current= setInterval(increment,1000);
       return () =>{
         clearInterval(intervalRef.current);
       };
  },[]);

  const clearIntervalFun =(interval)=>{
    clearInterval(interval);
  }  
  return (
    <div>
        <h1>{timer}</h1>
        <button onClick ={()=>clearIntervalFun(intervalRef.current)}>Clear Timer </button>
    </div>
  )
}

export default HookTimer