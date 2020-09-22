import React,{Component} from 'react';
import ComponentUNB from './ComponentUNB';


class ComponenUNtA extends Component{
    constructor(props){
        super()
        this.state={
            isOpen:false
        }
    }
    render(){
        return(
            <div>
                <h1>Parent Component</h1>
                {this.state.isOpen && <ComponentUNB/>}
                <button
                    onClick={()=>{
                    this.setState({
                        isOpen:!this.state.isOpen
                    })
                   }}
                >Click Here</button>
            </div>
        )
    }
}
export default ComponenUNtA