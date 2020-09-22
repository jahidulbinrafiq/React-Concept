// Life Cycle method || Updating phase:
// 1)static getDerivedStateFromProps()
// 2)shouldComponentUpdate(nextProps,nextState)
// 3)render()
// 4)getSnapShotBeforeUpdate
// 5)componentDidUpdate(previousProps,previousState)
import { render } from '@testing-library/react'
import React ,{Component} from 'react'

class UpdatePhase extends Component{
    constructor(props){
        super()
        this.state={
            value:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.value==this.state.value){
            return false
        }else{
            return true
        }
    }
    componentDidUpdate(previousProps,previousState){
        if(previousState.value==5){
            alert('wow! Number 5 is coming')
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                value:this.state.value+1
            })
        }, 2000);
    }
    render(){
        console.log('render')
        return(
            <div>
                <h3>Value:{this.state.value}</h3>
            </div>
        )
    }
}
export default UpdatePhase;