import React,{Component} from 'react'

class ComponentB extends Component{
    constructor(props){
        super()
        this.state={
            newValue:0
        }
    }
    
    static getDerivedStateFromProps(props,state){
      
        return{
            newValue:props.data
        }
    }
    render(){
        return(
            <div>
                <h2>ComponentB:{this.state.newValue}</h2>
            </div>
        )
    }
}
export default ComponentB;