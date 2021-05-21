import React, { Component } from 'react'

 class LifecycleMountC extends Component {
    constructor(props) {
       super(props)
    
       this.state = {
           name:'Ravi Kumar'
       }
       console.log('LifecycleMountC.. this is constuctor')
    }
    
    static getDerivedStateFromProps(){
       console.log('LifecycleMountC..this is static getDerivedStateFromProps ')
       return null
    }

    componentDidMount(){
       console.log('LifecycleMountC.. this is component didMount')
    }


   render() {
      console.log('LifecycleMountC..this is render method')
      return <h2>Lifecycle Mount C</h2>
   }
}

export default LifecycleMountC
