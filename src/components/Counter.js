import React, { Component } from 'react'

export default class Counter extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          count:0
      }
   }
   
   increament(){
      // this.setState({
      //   count:this.state.count+1 
      // },()=>
      // {console.log('callback value', this.state.count)}
      // )

      this.setState(prevState =>({
       count:prevState.count+1  
      }))
      console.log(this.state.count)
   }


   increamentFive(){
     this.increament()
     this.increament()
     this.increament()
     this.increament()
     this.increament()
   }


   render() {
      return (
         <div>
            <h1>count:{this.state.count} </h1>
            {/* <button onClick={()=>this.increament()}>Increament</button> */}
            <button onClick={()=>this.increamentFive()}>Increament</button>

         </div>
      )
   }
}
