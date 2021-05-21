import React, { Component } from 'react'

 class LifecycleMountB extends Component {
    constructor(props) {
       super(props)
    
       this.state = {
           name:'raj...'
       }
       console.log('Lifecycle Mount B..this is child constructor...')
    }
    
    static getDerivedStateFromProps(props,state){
       console.log('Lifecycle Mount B.. this is static getDerivedStateFromProps ')
       return null 
    }

    componentDidMount(){
       console.log('Lifecycle Mount B.. this is component DidMount..')
    }


   render() {
      console.log('Lifecycle Mount B.. this is render method..')
      return <h2>Lifecycle mount B</h2>
   }
}

export default LifecycleMountB



// in console inspect the result is:

// Lifecycle Mount A - this is constructor...
// LifecycleMountA.js:14 Lifecycle Mount A..this is static method..
// LifecycleMountA.js:23 Lifecycle Mount A...this is render method... 
// LifecycleMountB.js:10 Lifecycle Mount B..this is child constructor...
// LifecycleMountB.js:14 Lifecycle Mount B.. this is static getDerivedStateFromProps 
// LifecycleMountB.js:24 Lifecycle Mount B.. this is render method..
// LifecycleMountB.js:19 Lifecycle Mount B.. this is component DidMount..
// LifecycleMountA.js:19 Lifecycle Mount A..this is component didmount...