import React, { Component } from 'react';

class CarTWo extends Component {
    constructor(props){
        super()
        this.state={
            message:'Hey! I am trying to learn state Destructuring',
            anotherMessage:'Okay! I also try to help if you stuck in something'
        }
    }
    render() {
        const {brand,color}=this.props;
        const {message,anotherMessage}=this.state;
        return (
            <div>
              <h1>Brand:{brand},color:{color}</h1>
              <p>Message:{message}</p>
              <p>AnotherMessage:{anotherMessage}</p>
            </div>
        );
    }
}

export default CarTWo;