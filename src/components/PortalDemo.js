import React, { Component } from 'react'
import ReactDom from 'react-dom'

export class PortalDemo extends Component {
   render() {
      return ReactDom.createPortal(
         <h1>
            Portals Demo....
            </h1>
      ,document.getElementById('model-root'))
   }
}

export default PortalDemo
