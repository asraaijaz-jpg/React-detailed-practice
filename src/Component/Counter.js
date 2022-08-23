import React from "react";

class Counter extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    Increment()
    {
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log('Callback function' , this.state.count)}
        // )

        this.setState((prestate)=>({
            count:prestate.count+1
        }))

    }
    Incrementfive()
    {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.Incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;