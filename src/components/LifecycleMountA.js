import React, { Component } from 'react'
import LifecycleMountB from './LifecycleMountB'
import LifecycleMountC from './LifecycleMountC'

class LifecycleMountA extends Component {
   constructor(props){
      super(props)
      this.state = {
         name:'ishwar..'
      }
      console.log('Lifecycle Mount A - this is constructor...')
   }

   static getDerivedStateFromProps(props,state){
      console.log('Lifecycle Mount A..this is static method..')
      return null
   }

   componentDidMount(){
      console.log('Lifecycle Mount A..this is component didmount...')
   }

   render() {
      console.log('Lifecycle Mount A...this is render method... ')
      return (
         <div>
           <h1>hellooo..</h1> 
           <LifecycleMountC />

           <LifecycleMountB />
           
         </div>
      )
   }
}

export default LifecycleMountA
