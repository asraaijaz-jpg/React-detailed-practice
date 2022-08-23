import React , {Component} from "react";

class statehandling extends React.Component{
    constructor()
    {
        super()
        this.state={
            message:'Hello visitors'
        }
    }
    Changestate(){
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    render()
    {
        return(
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.Changestate()}>Subscribe</button>
        </div>
        )
    }
}

export default statehandling;