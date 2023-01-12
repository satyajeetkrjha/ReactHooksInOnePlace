import React, { useState ,useEffect} from 'react'

const HookCounterOne = () => {
  const[count,setCount] =useState(0);
  const[name ,setName] = useState('');
  // on every render this useffect is run
  useEffect(()=>{
    console.log('updating document title');
    document.title =`clicked ${count} times`
  },[count])
  const changeName =(e)=>{
    setName(e.target.value);
  }
  return (
    <div>
    <input type="text" onChange={(e)=>changeName(e)}></input>
    <button onClick={()=>setCount(count+1)}>Click {count}</button>

    </div>
    
  )
}

export default HookCounterOne