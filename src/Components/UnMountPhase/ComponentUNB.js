import React, { Component } from 'react';

class ComponentUNB extends Component {
    componentWillUnmount(){
        console.log('Say!Good Bye')
    }
    render() {
        return (
            <div>
                <h3>Child Component</h3>
            </div>
        );
    }
}

export default ComponentUNB;