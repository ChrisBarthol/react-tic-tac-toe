##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Welcome!

This tutorial follows the React tutorial found on [Facebook](https://facebook.github.io/react/tutorial/tutorial.html).
We will create a tic tac toe game from scratch.  Instead of using codepen you'll
be able to run this app locally.  This tutorial assumes that the user has [node](https://nodejs.org/en/download/)
installed.  We highly recommend a node version manager such as [nvm](https://github.com/creationix/nvm)

First off we need to make a directory for our application.

```
mkdir tictactoe
```

We can then run the npm init script to get a basic package.json file.

```
npm init
```

Next we will use npm to install react and react dom as main dependencies.  We will also
install babel and webpack as developement dependencies.

```
npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server
```

Now we can create a `webpack.congfig.js` file.  This is a webpack v1 file!

```
module.exports = {
  entry: [
    './app/index.js'
  ],

  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
```

Here we have defined a entry point.  This is the file that our app will load from.  Webpack will take that file,
compile and bundle the js and place it in the output path.  We have defined the output path as a separate dist
folder.  The module section tells webpack what files to compile.  Webpack will look for all files that end in
.js and load them through babel.  We have exclude all files in the node_modules as those should not be bundled
with the app.  We have also told babel that we will be using es6 and react.

We'll now create the app and dist folders.  Create an index.html file in both folders and an index.js file in
the app folder.  Webpack will compile the index_bundle.js file for us in the dist folder.  Later we will show
how to use webpack to also compile the index.html file.

#app/index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```
#app/index.js
```
import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

ReactDOM.render(
  <Game />, document.getElementById('app')
)
```
#dist/index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
  </head>
  <body>
    <div id="app"></div>
  <script type="text/javascript" src="index_bundle.js"></script></body>
</html>
```

We need to tell our `dist/index.html` file to load the bundled js file.  In our `app/index.js`
file we'll tell React that we are going to load a Game component into a certain DOM
element 'app'.  The last thing we need to add is the Game component.

#components/Game.js
```
import React, { Component } from 'react'

class Game extends Component {
  render(){
    return(
      <div>
        Welcome to Tic Tac Toe!
      </div>
    )
  }
}

export default Game
```
Components always have a single render method.  This render method must return one object.
Here we define a single div tag to encapsulate some text.  

WHEW

Now we are ready to run our app using webpack.  The following command runs the dev server
from the contents of the dist folder.
```
webpack-dev-server --content-base dist/
```

We will be using this command a lot and more than likely you will forget some part of it.
Lets add a script to help us. In our `package.json` file we can a start script to run our
command.  Now we can run `npm start` and it will boot up for dev server!

#package.json
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack-dev-server --content-base dist/"
},
```

Run `npm start` and navigate to [localhost:8080](localhost:8080).  You should see
your welcome message!  You may have to install webpack and webpack-dev-server globally.
Try directly editing the text in the Game component.  You'll
notice that webpack-dev-server monitors changes to files and we'll reload the app
once you have saved your changes.
