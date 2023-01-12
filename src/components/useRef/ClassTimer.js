import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props){
        super(props);
        this.state={
            timer :0
        }
    }
    componentDidMount(){
       this.interval = setInterval(()=>{
        this.setState({
            timer:this.state.timer+1
        })
       },1000)
    }
    componentWillUnmount(){
      clearInterval(this.interval);
    }
  render() {
    const {timer} = this.state ;
    return (
      <div>
       <h1>{timer}</h1>
       <button onClick ={()=> clearInterval(this.interval)}>Clear Interval</button>
      </div>
    )
  }
}

export default ClassTimer