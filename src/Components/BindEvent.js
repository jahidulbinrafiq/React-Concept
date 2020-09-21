import React, { Component } from 'react';

class BindEvent extends Component {
    constructor(props){
        super()
        this.state={
            message:'Welcome our Website'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Thanks for visiting website'
        })
    }
    render() {
        return (
            <div>
                <h1>We are going to explore bind event handler</h1>
                <hr/>
                <h3>{this.state.message}</h3>
                {/* <button onClick={()=>this.clickHandler()}>Click Here To Change message</button> */}
                <button onClick={this.clickHandler}>Click Here To Change message</button>
            </div>
        );
    }
}

export default BindEvent;