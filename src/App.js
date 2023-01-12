
import React,{useReducer} from 'react';
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookCounterThree from "./components/useState/HookCounterThree";
import HooksCounterFour from "./components/useState/HooksCounterFour";
import ClassCounterOne  from "./components/useEffect/ClassCounterOne";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HooksCounterTwo from "./components/useEffect/HooksCounterTwo";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import DataFetching from "./components/useEffect/DataFetching";
//import ComponentC from "./components/useContext/ComponentC";
//import CounterOne from './components/useReducer/CounterOne';
//import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';


import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import ParentComponent from './components/useCallback/Parent';
import CounterMemo from './components/useMemo/CounterMemo';
import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/customHooks/DocTitleOne';
import DocTitleTwo from './components/customHooks/DocTitleTwo';

import CounterOne from './components/customHooks/CounterOne';
import CounterTwo from './components/customHooks/CounterTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState =0;
const reducer =(state ,action)=>{
    switch(action){
        case 'increment':
           return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;  
        default:
            return state ;         
    }
}

function App(){
  return(
    <div>
      <CounterOne/>
      <CounterTwo/>
    </div>
  )
}

/*
Commented out for usecontext with usereducer
function App(){
  const[count,dispatch] = useReducer(reducer,initialState);
  return(
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div>
       <h1>Count is - {count}</h1>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
  )
}
*/


/*
Commented out for it is showing useContext and bla bla
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Satya'}>
        <ChannelContext.Provider value={'algorithm'}>
            <CounterThree/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
*/


export default App;
