/*
Why hooks ? Now,We can use state without class based components 
Reason1
classes don't minfiy really well and make hot reloading very unreliable .
Reason2
There is no particular way to reuse stateful component logic .
Hoc and render props patterns tries to solve this issue but the code is harder to follow .
There is a need to share stateful logic in a better way .Hooks help in this .
Reason3
Create components for complex scanerios such as data fetching and data subscribing to events .
Related code is not organized and put in one place .
Ex .Data fetching - in componentDidMount and componentDidUpdate
ex. Event listeners - componentDidMount and componentWillUnmount
*/
import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props){
    super(props);
    this.state ={
        count:0
    }
  };
  incrementCount =()=>{
    this.setState({
        count:this.state.count+1
    })
  }  
  render() {
    return (
       <div>
        
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment Count</button>
       </div>
    )
  }
}

export default ClassCounter;

