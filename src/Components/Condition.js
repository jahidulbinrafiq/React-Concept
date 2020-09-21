// Condition rendering is possible in four ways:
// 1}if-else
// 2)Element variables
// 3)Ternary operator
// 4)short circuit

import React, { Component } from 'react';

class Condition extends Component {
    constructor(props){
        super()
        this.state={
            isUser:true
        }
    }
    render() {
    //  if-else conditional rendering
    /*
      if(this.state.isUser){
          return(
              <div>
                  <h1>Hello User</h1>
              </div>
          )
      }else{
          return(
            <div>
              <h1>Hello Guest</h1>
            </div>
          )
      }
  

      //element variables
     let msg;
     if(this.state.isUser){
         msg=<h1>Hello User</h1>;
     }else{
         msg= <h1>Hello Guest</h1>
     }
     return msg
         */
        // return this.state.isUser?<h1>Hello User</h1>:<h1>Hello Guest</h1>;
        return this.state.isUser && <h1>Hello User</h1>;
    }
    
}

export default Condition;