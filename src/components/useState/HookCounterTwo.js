import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialcount =0;
    const [count,setCount] = useState(initialcount);
    const incrementFive=()=>{
        setCount((count)=>count+5)
    }
  return (
    <div>
      <h1>Count{count}</h1>
      <button onClick={()=>setCount(initialcount)}>Reest</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={incrementFive}>IncrementbyFive</button>
    </div>
  )
}

export default HookCounterTwo