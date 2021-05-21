//2 ways of Destructuring in Fuctional Component-----

import React from 'react'

// const Destructuring=({name,age})=> {
//    return (
//       <div>
//          <h1>Hello i am {name} and i am {age} </h1>
//       </div>
//    )
// }


//2nd method

const Destructuring = props => {
   const {name,age} = props
   return(
      <div>
         <h1>hello i am {name} and i am {age} </h1>
      </div>
   )
}
export default Destructuring