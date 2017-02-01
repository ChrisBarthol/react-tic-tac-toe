import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Game from './components/Game'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/tictactoe" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
