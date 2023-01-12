import React, { useState } from 'react'

const HooksCounterFour = () => {
    const initialState =[];
    const [items,setItems] = useState(initialState);
    const additem=()=>{
        let randomNumber = Math.random()*10;
        let newState =[...items,randomNumber];
        setItems(newState);
    }
    {console.log(items)}
  return (
    
    <div>
        <button onClick ={additem}>Click</button>
        <ul>
				{items.map(item => (
					<li key={item.id}>{item}</li>
				))}
			</ul>

    </div>
  )
}

export default HooksCounterFour