import React, { useState } from 'react'
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [display ,setDisplay] = useState(true);
    const changeDisplay=()=>{
        setDisplay(display =>!display);
    }
  return (
    <div>
        <button onClick={changeDisplay}>
          Toggle Display
        </button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer