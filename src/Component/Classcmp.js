import React , {Component} from "react";
import { ReactDOM } from "react";

class Classcmp extends React.Component{

    constructor()
    {
        super()
        this.state={
            message:'Hello'
        }
    }

    eventbinding()
    {
       this.setState({
           message:'goodbye'
        } ) 
    }

    render(){
        const{propname}=this.props
        return(
            <div>
                <h1>Come from class component prop {propname}</h1>
                  <p>{this.state.message}</p>
                <button onClick={()=>this.eventbinding()}>eventbinding</button>
            </div>
        )
    }
}
export default Classcmp;
