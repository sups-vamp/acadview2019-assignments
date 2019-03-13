import React, { Component } from 'react';
class Add extends Component
{
    state={
        name:null,
        bday:null,
        about:null
    }
    handleChange= (e) => {
        this.setState({
          [e.target.id]: e.target.value
        }
        )
      }
      handleSubmit= (e) => {
         e.preventDefault();
        this.props.addInfo(this.state); 
     }
    render()
    {
        return(
        <div class="bg">
            <form onSubmit={this.handleSubmit}>
                <label>Your Name</label><br/>
                <input type="text" id="name" onChange={this.handleChange}/><br/>
                <label>Your Bday</label><br/>
                <input type="text" id="bday" onChange={this.handleChange}/><br/>
                <label>Something about me!</label><br/>
                <textarea id="about" onChange={this.handleChange}></textarea><br/>
                <button className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
        );
    }
}
export default Add;
