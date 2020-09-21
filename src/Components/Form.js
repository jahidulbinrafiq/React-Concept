import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super()
        this.state={
            name:'',
            comment:'',
            option:''
        }
        this.nameChangeHandler=this.nameChangeHandler.bind(this)
        this.commentChangeHandler=this.commentChangeHandler.bind(this)
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
        this.optionHandler=this.optionHandler.bind(this)
    }
   nameChangeHandler(event){
       this.setState({
           name:event.target.value
       })
   }
   optionHandler(event){
       this.setState({
           option:event.target.value
       })
   }
   commentChangeHandler(event){
       console.log(event.target.value)
       this.setState({
           comment:event.target.value
       })
   }
   onSubmitHandler(event){
      
       alert(`${this.state.name} ${this.state.comment} ${this.state.option}`)
       event.preventDefault()
       this.setState({
           name:'',
           comment:'',
           option:''
       })
   }
    render() {
        return (
            <div>
              <form onSubmit={this.onSubmitHandler}>
                  <div>
                      <label>Name:</label>
                      <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
                      <br/><br/>
                      <label>Comment:</label>
                      <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
                      <br/><br/>
                      <select name="" id="" value={this.state.option} onChange={ this.optionHandler}>
                          <option value="bangla">Bangla</option>
                          <option value="english">English</option>
                          <option value="math">Math</option>
                          <option value="history">History</option>
                      </select>
                      <br/><br/>
                      <input type="submit" value="submit"/>
                  </div>
              </form>
            </div>
        );
    }
}

export default Form;