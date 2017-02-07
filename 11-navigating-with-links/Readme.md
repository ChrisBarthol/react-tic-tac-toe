##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


#Navigating with Links

When we arrive at the main page of the app we only have some text rendered.  We
have no way of directing people to the `/tictactoe` route to play the game. Let's
add a secondary nav section to our main app.

###App.js
```
<div className='secondary-nav'>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/tictactoe">TicTacToe</Link></li>
  </ul>
</div>
```

The Link component is almost identical to the anchor tag `<a/>` except that it
is aware of the Router that it was rendered in.  Since it knows the route it
can be styled differently

###App.js
```
<div className='secondary-nav'>
  <ul>
    <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
    <li><Link to="/tictactoe" activeStyle={{ color: 'red' }}>TicTacToe</Link></li>
  </ul>
</div>
```

Notice that when you go to `/tictactoe` both link items are red since `/tictactoe`
is nested under the root url and both routes are active.  The above method uses
inline styling.  The Link component also supports class names.

###App.js
```
<div className='secondary-nav'>
  <ul>
    <li><Link to="/" activeClassName="active">Home</Link></li>
    <li><Link to="/tictactoe" activeClassName="active">TicTacToe</Link></li>
  </ul>
</div>
```

###styles/main.css
```
.active {
  color: green;
}
```

And now our active routes are green!

Now not every link needs to have an active state.  Usually we would only need those
link types for primary page navigation.  It can be tough to remember exactly what
active style everywhere.  We can use the composability of components to create a
wrapper for Link components that we wish to have the active style applied to.

Create a new folder and file `wrappers/NavLink.js`

###wrappers/NavLink.js
```
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
```

In this component we return the Link component.  We've added the spread operator `...`
three dots.  This clons our props and in this case the activeClassName prop. Now
in we can use this component as our navigation links.

###App.js
```
import NavLink from '../wrappers/NavLink'

...


<div className='secondary-nav'>
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
  </ul>
</div>
```

You'll notice that the Home link is always active. The `tictactoe` route is a nested
route of the root so the root is the parent of everything.  We only want it to be
in an active state when we are on the rot url.  Luckily React Router has a component
for index routes
###App.js
```
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

...

<div className='secondary-nav'>
  <ul>
    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
  </ul>
</div>
```
We could also use the `onlyActiveOnIndex` property:

```
<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
```

Since we've already abstracted away the `activeClassName` with the NavLink component
we can pass the `onlyActiveOnIndex` prop to NavLink.

```
<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
```

This secondary nav section looks a little silly. Let's add the tictactoe route
to our main nav bar as well as create routes for the contact and about page.

###components/Contact.js
```
import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
      <div>
        Contact Page
      </div>
    )
  }
}

export default Contact
```

###components/About.js
```
import React, { Component } from 'react'

class About extends Component {
  render(){
    return(
      <div>
        About Page
      </div>
    )
  }
}

export default About
```

###components/Header.js
```
import NavLink from '../wrappers/NavLink'
import Link from 'react-router'

....

<Link to="/" activeClassName="navbar-brand text-center">React Tic Tac Toe</Link>

....

<ul className="nav navbar-nav">
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
</ul>
```

We then need to define these routes in the router.


###index.js
```
import About from './components/About'
import Contact from './components/Contact'

...

<Route path="/" component={App}>
  <Route path="/tictactoe" component={Game}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
</Route>
```

Since we are putting the links in the nav lets update the `active` class.


###main.css
```
.active {
  color: white;
  font-weight: bold;
}
```
