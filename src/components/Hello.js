import React from 'react'

export default function Hello() {
   // return (
   //    <div>
   //       <h1>hello i am ish...</h1>
   //    </div>
   // )

   //without jsx-----------

   return React.createElement('h1',null, 'this is without JSX...', React.createElement('h6',null,'i am writting without JSX.'))
   
}
