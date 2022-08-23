import React , {Component} from "react";
import Child from './child';

class Parent extends React.Component{

    // constructor()
    // {
    //     super()
    //     this.Showparentmxg=this.Showparentmxg.bind(this);
    // }
     
    Showparentmxg(Childmxg)
    {
        alert(`hello child come from parent as a method through props ${Childmxg}`)
    }
    render()
    {
        return(
            <div>
                <h1>Pass method as props from parent to child</h1>
                <Child passmethodasprop={this.Showparentmxg}/>
            </div>
        )
    }
}

export default Parent