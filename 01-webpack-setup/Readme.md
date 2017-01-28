###This is a continuation of the react-tic-tac-toe tutorial. The state of the app
###in this lesson is the end state of the directions in the Readme.
###Follow the directions in the Readme and you should arrive at the same state.


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

Now we can create a `webpack.congfig.js` file.

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
file we tell React that we are going to load a Game component into a certain DOM
element 'app'.  



Add app and dist directories
Add index.html and index.js, and dist/index.html files.  We will be rebuilding index_bundle.js with webpack.

Add app/components directory
https://gist.github.com/ChrisBarthol/655cf4e65df70724d5c7773fbfa0c34b


###Adding Components
Add Board.js Square.js and redo Game.js
https://gist.github.com/ChrisBarthol/bb6baa798162ff0775055f2d1b12eee7

webpack-dev-server --content-base dist/

###Adding Style
npm install --save-dev extract-text-webpack-plugin style-loader css-loader
https://gist.github.com/ChrisBarthol/9f95b137dbcdba485af9b198b186588b


replace <Square /> with <Square value={i} />
and the TODO with {this.props.value}
Extra passing this
https://gist.github.com/ChrisBarthol/7d495c03ef1eb4b28c555799ddd27d3b

Clicking for X
https://gist.github.com/ChrisBarthol/5399c2a376aedec14d3320858814e8eb

Push state upwards
https://gist.github.com/ChrisBarthol/c4f359aa0d45bc889789ddfa1f0e77cb

Functional Components and Taking Turns
https://gist.github.com/ChrisBarthol/75bba2883adb57a942a6d66b910b9962

Declaring a winner
https://gist.github.com/ChrisBarthol/fd13cb85f25e58ef4da3b25411da1663

Storing History - Follow https://facebook.github.io/react/tutorial/tutorial.html for excellent text
https://gist.github.com/ChrisBarthol/b7047d109c0ee1329a81ae9b49020d1c


###Fuller app
Add Header and Footer and some more styling
https://gist.github.com/ChrisBarthol/961faee5a7e8e932773d0bca59fd62a2


###Add React Router
npm install --save react-router
Update index.js
add App.js
https://gist.github.com/ChrisBarthol/fe05341c123eae2d53fa20590df4c119

###Nested Routes
https://gist.github.com/ChrisBarthol/908f2b1088f5bd27eaa50e2d57b9e446
