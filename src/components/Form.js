import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
       super()
       this.state = {
          username:'',
          comments:'',
          topic:'react'
       }
    }

    handleUsernameChange = event => {
       this.setState({
          username: event.target.value
       })
    }

    handleCommentsChange = event => {
       this.setState({
             comments:event.target.value
       })
    }

    handleTopicChange = event => {
       this.setState({
         topic:event.target.value 
       })
    }

    handleSumit = event => {
      alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
      // if we want to stay the data at input in the page or we donot want to page refresh
      event.preventDefault()
    }

   render() {
      return (
         <form onSubmit={this.handleSumit}>
         <div>
           <h1> <label>username:</label><br></br>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
            </h1>
         </div>
         <div>
            <h2>
               <label>Comments:</label><br></br>
               <textarea value={this.state.comments} onChange={this.handleCommentsChange} />
            </h2>
         </div>
         <div>
            <h2>
            <label>Topic:</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
               <option value="react" >React</option>
               <option value="vue">Vue</option>
               <option value="angular">Angular</option>
            </select>
            </h2>
         </div>
         <button type="submit">Submit</button>
         </form>
      )
   }
}

export default Form
