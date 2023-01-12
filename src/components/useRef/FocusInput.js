import React, { useEffect, useRef } from 'react'

function FocusInput() {
  
    // to access dom nodes
    const inputRef = useRef(null);
    // we want to focus the input as component loads
    useEffect(()=>{
       inputRef.current.focus();
    },[])
    
  return (
    <div>
        <input type="text" ref={inputRef}></input>
    </div>
  )
}

export default FocusInput