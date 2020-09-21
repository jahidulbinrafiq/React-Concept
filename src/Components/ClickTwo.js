import React, { Component } from 'react';

class ClickTwo extends Component {
    handleEvent=()=>{
        console.log('clicked here successfully from class component')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Stateful Component/Class Component</button>
            </div>
        );
    }
}

export default ClickTwo;