import React, { useEffect ,useState} from 'react'

const IntervalHookCounter = () => {
    const[count,setCount] = useState(0);
   
    const tick =()=>{
        setCount(count+1);
        //note that if we use 
        //setCount((count)=> count+1) then we don't need to put count in depedency .
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000);
        return ()=>{
            console.log('unmounted');
            clearInterval(interval);
        }
    },[count]);
  return (
    <div>
        <h1>Count - {count}</h1>
    </div>
  )
}

export default IntervalHookCounter