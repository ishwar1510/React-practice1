import React from 'react'

function ErrorChildComp({heroName}){
   if(heroName === 'jocker'){
      throw new Error('not a hero..')
   }
   return (
      <div>
         {heroName}
      </div>
   )
}

export default ErrorChildComp