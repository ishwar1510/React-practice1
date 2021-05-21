import React from 'react'

function EventHandler() {

   function ishHandler(){
      console.log('button clicked')
   }


   return (
      <div>
         <button onClick={ishHandler}>click</button>
      </div>
   )
}

export default EventHandler
