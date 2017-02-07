##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


#Browser History

Currently we are using `hashHistory` with React Router.  This is a hack to always
allow the router to work.  It also puts the `#` in the url bar making it ugle and
navigation by memory tough. Modern browsers let JavaScript manipulate the URl
without making a request.  We dont need to rely on the hash to do the url routing.

###index.js
```
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/tictactoe" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
```


Now you can navigate without the hash in the url bar.  However there is a catch, try
to refresh the page.  You'll get an error:

```
Cannot GET /tictactoe
```

Our app is manipulating the URL and how server needs to know how to handle serving
the app no matter URL comes in.  Luckily webpack dev server has an option to enable
and handle this issue.

###package.json
```
"start": "webpack-dev-server --inline --content-base dist/ --history-api-fallback"
```

Make sure to stop your server and run `npm start` again!
