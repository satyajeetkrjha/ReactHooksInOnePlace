import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleOne() {
  const[count,setCount] = useState(0);

  useDocumentTitle(count);  

  return (
    <div>

        <button type='button' onClick={()=>setCount((count)=>count+1)}> Count is {count}</button>
    </div>
  )
}

export default DocTitleOne