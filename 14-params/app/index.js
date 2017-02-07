import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Game from './components/Game'
import Home from './components/Home'
import User from './components/User'
import Users from './components/Users'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/tictactoe" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/users" component={Users} >
        <Route path="/users/:userName" component ={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
