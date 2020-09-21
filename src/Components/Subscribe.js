import React from 'react';

class Subscribe extends React.Component{
    constructor(props){
        super();
        this.state={
              message:'Please Hit the subscribe button'
        }
    }
    changeMessage=()=>{
        this.setState({
            message:'Thanks for Subscribe more update coming soon.........'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}
export default Subscribe;