import React , {Component} from "react";

class Conditionalrendering extends React.Component{
    constructor()
    {
        super()
        this.state={
            isloged:true
        }
    }

    render()
    {

        // Conditional Rendering
        // if/else

        // if(this.state.isloged)
        // {
        //     return(<h1>(Conditionalrendering) Welcome Users</h1>)
        // }
        // else{
        //     return(<h1>(Conditionalrendering) Welcome visitors</h1>)
        // }

        // let message
        // if(this.state.isloged)
        // {
        //     message=<div>(Conditionalrendering) Welcome users</div>
        // }
        // else{
        //     message=<div>(Conditionalrendering) Welcome visitors</div>
        // }

        // return(<h1>{message}</h1>)

        // Ternary operator

        // return(
        //     this.state.isloged?
        //     <h1>(Conditionalrendering) Welcome users</h1>:
        //     <h1>(Conditionalrendering) Welcome visitors</h1>

        // )

        // Short circuit operator

        return (this.state.isloged && <h1>(Conditionalrendering) Welcome users</h1>)
    }
    
}

export default Conditionalrendering