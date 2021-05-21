import React, { Component } from 'react'

export default class Message extends Component {
   constructor(){
      super()
      this.state={
         Message:'hi good morning Ishwar.'
      }
   }
    changeMessage(){
       this.setState({
          Message:'thank you for Subscribing...'
       })
    }


   render() {
      return (
         <div>
            <h1> {this.state.Message} </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
         </div>
      )
   }
}
