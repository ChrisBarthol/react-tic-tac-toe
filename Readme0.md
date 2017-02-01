##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


#Nested Routes

Our app will have some content that shows on every page.  For us this will be our
Header and Footer components.  From our `index.js` file our root url displays the
app component so lets add the extra components there.

###components/App.js
```
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <div className='content'>
          App
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
```

We import our components and then place them within our render function.  We've
also added a `content` div which will display our inner content.  That inner content
is going to change based on which page we are on. For our new app lets make the
Game component render on the route `/tictactoe`. This route should be nested
under the root url.

###index.js
```
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
```

Here we have expanded the root url Route component to have a separate closing `</Route`.
Anything within the root url tags will now be nested.  We have also added the Game
component to the `/tictactoe` route.  When we start the dev server and go to the root
url we now see the Header and Footer surround the 'App ' text.  Lets go to the `/tictactoe`
route.

Hrm... we still see just App. We've loaded the root url but there is no outlet
for our nested route. We need to load the child components into the App component.

###App.js
```
<div className='content'>
  App
  {this.props.children}
</div>
```

Now our Game component will render into the App component.  Remove the Footer and
Header component calls in the Game component to remove the double header and footers.
