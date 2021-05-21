import React, {Component} from 'react'

class ConditionalRender extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
          isLoggedIn:false
      }
   }

         // if-else condition
   // render(){
   //    if(this.state.isLoggedIn){
   //       return(
   //          <h2>Welcome Ishwar</h2>
   //       )
   //    }else {
   //       return(
   //          <h3>Welcome Guest</h3>
   //       )
   //    }
  // }

   // Element variables

//   render(){
//    let message
//    if(this.state.isLoggedIn){
//       message= <h2>welcome ishwar!</h2>
//    }else{
//       message=<h3>welcome Guest</h3>
//    }
//    return(
//       <div>{message}</div>
//    )
// }

     
    // ternary conditional rendering
   render(){
      return this.state.isLoggedIn ? 
      (<h2>Welcome Ishwar!!!</h2>) :
      (<h3>Welcome Guest...</h3>)
   }

}

export default ConditionalRender