//Parent Component...

import React, { Component } from 'react'
import InputRefs from './InputRefs'

 class FocusInputRefs extends Component {
    constructor(props) {
       super(props)
    
       this.componentRef = React.createRef()
    }

    clickHandler= () => {
       this.componentRef.current.focusInput
       ()
    }
    
   render() {
      return (
         <div>
            <h1><InputRefs ref= {this.componentRef} /></h1>
            <button onClick={this.clickHandler}>Focus Input</button>
         </div>
      )
   }
}

export default FocusInputRefs
