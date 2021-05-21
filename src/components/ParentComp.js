import React, { Component} from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'


 class ParentComp extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          name:'ishwar..'
      }
   }
   
   componentDidMount(){
      setInterval(() => {
         this.setState({
            name:'Hallur..'
         })
      },2000)
   }

   render() {
      console.log('---Parent Component Render---')
      return (
         <div>
            Parent Component
            {/* <PureComp name={this.state.name} /> */}
            {/* <RegularComp name={this.state.name} /> */}

            <MemoComp name={this.state.name} />
         </div>
      )
   }
}

export default ParentComp
