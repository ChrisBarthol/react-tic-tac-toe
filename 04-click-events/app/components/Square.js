import React, { Component } from 'react'

class Square extends Component {
  constructor() {
   super()
   this.state = {
     value: null,
   };
 }

  handleClick(){
    this.setState({value: 'X'})
  }

  render(){
    return(
      <button className="square" onClick={this.handleClick.bind(this)}>
        {this.props.value}
      </button>
    )
  }
}

export default Square
