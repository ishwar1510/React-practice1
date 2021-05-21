import React, {Component} from 'react'

class EventBind extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          message:'hello'
      }
            // 3rd approch
      // this.clickHandler = this.clickHandler.bind(this)
   }

   // clickHandler(){
   //    this.setState({
   //       message:'good bye...'
   //    })
   //    console.log(this)
   // }

         // 4th approch--fat arrow function
   clickHandler= () =>{
      this.setState({
        message:'good bye!!!' 
      })
      console.log(this)
   }
   

   render(){
      return(
         <div>
            <h2> {this.state.message} </h2>
            {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

                         {/* 2nd approch */}
               {/* <button onClick={()=>this.clickHandler()}>click</button> */}

                           {/* 3rd approch */}
               {/* <button onClick={this.clickHandler}>click</button> */}

                  {/* 4th approch--fat arrow function after constructor */}
                    
                     <button onClick={this.clickHandler}>click me</button>
         </div>
      )
   }
}

export default EventBind