import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
   constructor(){
      super()
      this.state={
         parentName:'i am parent...'
      }
      this.greetParent=this.greetParent.bind(this)
   }

   greetParent(){
      alert(`hello ${this.state.parentName}`)
   }


   render(){
      return(
         <ChildComponent greetHandler={this.greetParent} />
      )
   }
}

export default ParentComponent