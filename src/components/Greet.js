import React from 'react'



// function Greet() {
//    return (
//       <div>
//          <h1>hello i am good....</h1>
//       </div>
//    )
// }


export const Greet = (props) => {
   console.log(props)
  return <>
   <h1>hello... {props.name},{props.age} </h1>,
   {props.children}
</>
}


