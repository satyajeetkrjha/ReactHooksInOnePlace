import React ,{useState,useMemo} from 'react'

function CounterMemo() {
  
  const[counterone,setCounterone] = useState (0);
  const[countertwo,setCountertwo] = useState(0);
  
  const incrementone =()=>{
    setCounterone(counterone+1);
  }
  const incrementtwo =()=>{
    setCountertwo(countertwo+2);
  }
  
 // this isEven is cached now and will not be computed every other time there is change and only on counterone change ,this function is called 
 const isEven= useMemo(()=>{
    let i =0 ;
    while( i < 2000000000){
        i++;
    }
    return counterone %2 ==0 ;
  },[counterone])

  
  
  return (
    <div>
        <div>
            <button onClick={incrementone}>{counterone}</button>
            <span>{isEven ?'Even':'Odd'} </span>
            </div>
        <div><button onClick={incrementtwo}>{countertwo}</button></div>
    </div>
  )
}

export default CounterMemo