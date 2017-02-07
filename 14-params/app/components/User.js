import React, { Component } from 'react'

class User extends Component {
  render(){
    return(
      <div>
        <h1 className='text-center'>
          {this.props.params.userName}
        </h1>
      </div>
    )
  }
}

export default User
