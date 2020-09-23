import React,{Component} from 'react'
import MemoB from './MemoB';

class MemoA extends Component{
    constructor(props){
        super()
        this.state={
            speed:1
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                speed:this.state.speed+1
            })
        }, 2000);
    }
    render(){
       
        return(
            <>
              <h2>Memo Class Component</h2>
              <hr/>
              <MemoB data={this.state.speed}/>
            </>
        )
    }
}
export default MemoA;