import React, { Component } from 'react'
import { UserConsumer, UserProvider } from './UserContext'

 class ComponentF extends Component {
   render() {
      return (
        <UserConsumer>
           {name => {
              return <div>helloo {name} </div>
           }
 }
        </UserConsumer>
      )
   }
}

export default ComponentF
