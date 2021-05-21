import React, { Component } from 'react'

 class ClassClick extends Component {

   ishHandler(){
      console.log('clicked the button')
   }


   render() {
      return (
         <div>
            <button onClick={this.ishHandler}>click me</button>
         </div>
      )
   }
}

export default ClassClick
