import React, { Component } from 'react';

class Count extends Component {
    constructor(props){
        super();
        this.state={
            value:0
        }
    }
    increment=()=>{
        // this.state.value=this.state.value+1
        this.setState({
           value:this.state.value+5
        },()=>{
            console.log(this.state.value)
        })

       
    }

    render() {
        return (
            <div>
                <h3>Count:{this.state.value}</h3>
                <button onClick={this.increment}>Increase Value</button>
            </div>
        );
    }
}

export default Count;