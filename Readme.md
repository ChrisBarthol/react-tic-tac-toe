###Command List

mkdir tictactoe
npm init

copy and paste package.json depencies and run yarn install (need to have yarn installed)

npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server


Create webpack.config.js and .babelrc

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
