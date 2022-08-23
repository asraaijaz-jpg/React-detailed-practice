import React from "react";

const HOC=(OriginalComponent,incrementcount) => {
    class NewComponent extends React.Component{

        constructor(props)
        {
            super(props)
            {
                this.state={
                    count:0
                }
            }
        }
    
        counter=()=>{
            this.setState(prestate=>{
                return{count:prestate.count+incrementcount}
            })
        }
    
        render(){
            return <OriginalComponent count={this.state.count} counter={this.counter} name='Asra' {...this.props}/>
        }
    }
    return NewComponent
}

export default HOC