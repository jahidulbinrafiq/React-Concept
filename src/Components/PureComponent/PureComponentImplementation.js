import React, {PureComponent } from 'react';

class PureComponentImplementation extends PureComponent {
    constructor(props){
        super()
        this.state={
            speed:1
        }
    }
    // componentDidUpdate(nextProps,nextState){
    //     if(nextProps.speed===this.state.speed){
    //         return false;
    //     }
    // }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                speed:this.state.speed
            })
        }, 2000);
    }
    render() {
        console.log('render')
        return (
            <div>
              <h2>Speed:{this.state.speed}</h2>
            </div>
        );
    }
}

export default PureComponentImplementation;