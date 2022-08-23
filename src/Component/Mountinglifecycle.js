import React , {PureComponent} from "react";

class Mountinglifecycle extends React.PureComponent
{

    constructor(){
        console.log('This is construtor method');
        super()

        this.state={
            name:'Asra'
        }
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('This is getderivedStateFromProps');
    }

    componentDidMount()
    {
        console.log('This is Componentdidmount method');
    }
   
    shouldComponentUpdate()
    {
        console.log('This is shouldcomponentupdate method');
        return true;
    }

    getSnapshotBeforeUpdate(preprop,prestate)
    {
        console.log('This is getSnapshotBeforeUpdate method');
        return null;
    }

    componentDidUpdate()
    {
        console.log('This is componentDidUpdate method');
    }

    componentWillUnmount()
    {
        console.log('This is componentWillUnmount method');
    }
    render(){
        console.log('This is render method');
        return(
            <div>
                <h1>Mountinglifecycle of a Component</h1>
                
            </div>
        )
    }
}

export default Mountinglifecycle