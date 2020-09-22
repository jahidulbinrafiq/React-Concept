// Mounting Phase:
// 1)Constructor:
// 2)static getDerivedFromState(){}
// 3)render()
// 4)componentDidMount


import { render } from '@testing-library/react'
import React,{Component} from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component{
    constructor(props){
        super()
        this.state={
            value:0
        }
        this.incrementHandler=this.incrementHandler.bind(this)
    }
    incrementHandler(){
        this.setState({
            value:this.state.value+1
        })
    }
    render(){
        return(
            <div>
                <h1>ComponentA:{this.state.value}</h1>
                <button onClick={this.incrementHandler}>Increse Value</button>
                <hr/>
                <ComponentB data={this.state.value}/>
            </div>
        )
    }
}
export default ComponentA;