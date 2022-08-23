import React , {Component} from "react";

class Form extends React.Component{

    constructor()
    {
        super()
        this.state={
            username:'',
            comments:'',
            option:''
        }
    }

     handleusername=event=>{
      this.setState({
          username:event.target.value
      })
    }

    handleusercomment=event=>{
        this.setState({
            comments:event.target.value
        })
      }

    handleuseroption=event=>{
        this.setState({
            option:event.target.value
        })
      }
    
    handlesubmit=event=>{
         alert(`${this.state.username} , ${this.state.comments} , ${this.state.option}`)
     } 

    render()
    {
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username}
                        onChange={this.handleusername}></input>
<br></br>
                        <label>Comment</label>
                        <textarea type='text' value={this.state.comments}
                        onChange={this.handleusercomment}></textarea>
<br></br>
                         <label>Select skill</label>
                         <select value={this.state.option}
                        onChange={this.handleuseroption}>

                             <option>React js</option>
                             <option>Vue js</option>
                             <option>Angular</option>
                         </select>
<br></br>
                        <button type="submit">Submit</button>

                    </div>
                </form>
            </div>
        )

}
}
export default Form;