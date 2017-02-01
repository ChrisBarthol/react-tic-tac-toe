##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Add React Router

This lesson we are going to add React Router.  Before we get there, lets add a bit
more style with a nav and footer.  This will make our React Router tutorial easy.
Go ahead and update the following files

app/index.html : Add Bootstrap, Jquery (needed for bootstrap), Font Awesome
components/Footer.js
components/Header.js
styles/nav.css

Now in your Game component lets add the Footer and Header to see what they look like.

#Game.js
```
import React, { Component } from 'react'
import Board from './Board'
import Footer from './Footer'
import Header from './Header'
require('../styles/main.css')

class Game extends Component {

  ......

    return (
    <div>
      <Header />
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      <Footer />
    </div>
  )
  }
}

export default Game
```

We import the Header and Footer components into the Game component and then
add them to the render's return.  Next lets add React Router

```
npm install --save react-router
```

React Router is not a dev dependency, so use `--save`.  Currently we load the
Game component directly into the app id element on the page.  We are going to
want multiple pages, maybe we'll have a bunch of different games on our site.
We'll let React Router handle the routing of the entire app.  Notice we are moving
from just a Game component and now talking about an entire app.

#app/index.js
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Game from './components/Game'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'))
```

We've added a react-router import and replace out `<Game />` component with React
Router.  React Router is a component, just like Game is a component.  We will start
with using react routers hash history.  It manages routing history with the hash
portion of the url.  Within the Router component with have a Route component.
Here we defined the path prop to be the root url and the component prop to be
an App component.  We currently done have this component so lets go ahead and make it.

#components/App.js
```
import React, { Component } from 'react'

class App extends Component {
  render(){
    return <div>App</div>
  }
}

export default App
```

For now lets just return a div that says App.  Running `npm start` we no longer have
our Game component but we are now using react router to load the App component.
