##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


#Index Route

Currently when we navigate to `/` our root url it loads the Footer and Header
components and is otherwise blank.  We'd really like to render a Home component
to show some context at the index route.  One way to do this would be to check
if there are any children being passed to the App component.  If there arent any
render the Home component.


###App.js
```
<div className='content'>
  {this.props.children || <Home />}
</div>
```

This will work fine, but there are many [reasons](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/08-index-routes)
to not want the App and Home components coupled.  Let's first create a Home component

###components/Home.js
```
import React, { Component } from 'react'

class Home extends Component {
  render(){
    return(
      <div>
        <h1 className='text-center'>
          Welcome to React Tic Tac Toe!
        </h1>
      </div>
    )
  }
}

export default Home
```

We would like to render this component as the index of the App Route, so when no
child components are present to render the Home component. React Router comes with
an `IndexRoute` component just for this task.

###index.js
```

....

import Home from './components/Home'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/tictactoe" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
```


Here we have added the IndexRoute within the root url `/`.  Any outer route can
have an IndexRoute.  Notice that the IndexRoute has not path, it is automatically
render when no `this.props.children` exist.
