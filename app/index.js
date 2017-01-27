import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Game from './components/Game'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/tictactoe" component={Game}/>
    </Route>
  </Router>
), document.getElementById('app'))
