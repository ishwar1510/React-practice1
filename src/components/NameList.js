import React from 'react'

function NameList() {
   const persons = [
      {
         id:1,
         name:'Ishwar',
         age:27,
         skill:'React'
      },
      {
         id:2,
         name:'Sattya',
         age:28,
         skill:'java'
      },
      {
         id:3,
         name:'Ravi',
         age:27,
         skill:'node'
      }
   ]
   const personList = persons.map(person =><h3> key={person.name}.{person.id}. i am {person.name}. i am {person.age}.i am {person.skill} </h3>)
   return (
      <div>
         {personList}
      </div>
   )
}

export default NameList
