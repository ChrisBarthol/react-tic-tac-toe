##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


#Passing Params

Let's say our app is going to have Users.  If we wanted to view a users page the
url might look something like `/users/:userName`, where `:userName` is a placeholder
for the users name in the database.  This depicts a scenario where the userName is
unique in your database.  This could like the following

###index.js
```
import User from './components/User'
import Users from './components/Users'

...

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/tictactoe" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/users" component={Users}/>
      <Route path="/users/:userName" component ={User}/>
    </Route>
  </Router>
), document.getElementById('app'))
```

We have defined a main `/users` route that could a list of users, high scores, etc.
Passing a userName to the URL will get redirected to the User component.  Let's
build the User component.

###components/User.js
```
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
```

Our params are available on the props object.  Here we display the userName on the
page but it could easily be used to fetch data for that particular user.  Now lets
make a simple index users page to list all our users.

###components/Users.js
```
import React, { Component } from 'react'
import {Link} from 'react-router'

class Users extends Component {
  render(){
    return(
      <div>
        <h1 className='text-center'>
          Users
        </h1>
        <ul>
          <li><Link to="/users/ChadBurgers">Chad Burgers</Link></li>
          <li><Link to="/users/ReneeMcSway">ReneeMcSway</Link></li>
        </ul>
      </div>
    )
  }
}

export default Users

```

Now go to `/users` and you'll see a simple list of users.  Clicking through will
bring you to the individual user page with their name displayed.  Previously we
discussed nested routes.  Our users section is a perfect example where we should
be nesting routes.

###index.js
```
<Route path="/users" component={Users} >
  <Route path="/users/:userName" component ={User}/>
</Route>
```

and in our Users component we need to pass along the User route if it is active.

###components/Users.js
```
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

```

We've defined a simple sidebar to show the list of users and added some css to `main.css`

###main.css
```
.sidebar {
  width: 20%;
  float: left;
}

.main-content {
  overflow: auto;
  height: 500px;
}
```

Now when we load the page we get a bunch of errors.  Hrm...the console shows it
cannot get the bundle or css files.  It looks like it is trying to get them
from `/users/app.css`.  That's not the file structure we had.  What happened?

When we switched to browserHistory we didnt take into account that the app could
load from a deep route (the users route in this case).  Our index.html file in `/dist/`
shows that we are using relative paths.  So the app looks for `app.css` and the
level it is at and cant find it.  We need to switch it absolute paths.  We have
webpack handling these definitions so we need to update our config to have a public
path.

###webpack.config.js
```
output: {
  path: __dirname + '/dist',
    publicPath: '/',
  filename: "index_bundle.js"
},
```

Now stop your server and run `webpack`.  Open the `dist/html.index` file and now
our paths are properly defined that app.css will be at the root `/app.css`.
