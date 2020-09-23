// Life cycle method || Error Handling phase:
// 1)static getDerivedStateFromError(error)
// 2)componentDidCatch(error,info)

import React,{Component} from 'react'

class Error extends Component{
    constructor(props){
        super()
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render(){
        return(
            <div>
               {this.state.hasError ?<h2>Something is wrong</h2>:this.props.children}
            </div>
        )
    }
}
export default Error