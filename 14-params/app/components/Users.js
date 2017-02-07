import React, { Component } from 'react'
import {Link} from 'react-router'

class Users extends Component {
  render(){
    return(
      <div className='users-wrapper'>
        <div className='sidebar'>
          <h1 className='text-center'>
            Users
          </h1>
          <ul>
            <li><Link to="/users/ChadBurgers">Chad Burgers</Link></li>
            <li><Link to="/users/ReneeMcSway">ReneeMcSway</Link></li>
          </ul>
        </div>
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Users
