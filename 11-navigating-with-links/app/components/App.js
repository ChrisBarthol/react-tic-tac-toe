import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import NavLink from '../wrappers/NavLink'
import {Link} from 'react-router'

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <div className='secondary-nav'>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
