import React from 'react'
import './myStyle.css'


function Stylesheet(props) {
   let className = props.primary ? 'primary' : 'danger'
   return (
      <div>
         <h3 className={`${className} font-xl`}>its my stylesheet..</h3>
      </div>
   )
}

export default Stylesheet
