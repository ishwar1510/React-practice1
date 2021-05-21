import React from 'react'

function ListRender() {
   const names = ['ish','sattya','ravi']

      // 3rd--approch
   const nameList = names.map(name => <h4>{name}</h4>)
   
   return (
      <div>
         {/* ----------------1st--approch------------ */}

         {/* <h3>{names[0]}</h3>
         <h3>{names[1]}</h3>
         <h3>{names[2]}</h3> */}
         

            {/* -----------2nd--approch--------------- */}

         {/* {names.map(name => <h1> {name} </h1>)} */}


         {/* -------------3rd--approch------------------- */}

         {nameList}

      </div>
   )
}

export default ListRender
