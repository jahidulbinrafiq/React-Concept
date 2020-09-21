import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
        super()
        this.state={
            message:'Hello!React learner'
        }
        this.greeting=this.greeting.bind(this)
    }
    greeting(data){
        alert(`${this.state.message} from ${data}`)
    }
    render() {
        return (
            <div>
                <Child greetingMethod={this.greeting}/>
            </div>
        );
    }
}

export default Parent;