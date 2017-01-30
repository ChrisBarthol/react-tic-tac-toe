##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Adding Style

Currently our board doenst look very good.  We have classes but we havent defined
any style.  A lot of react apps might just use inline style tags.  Personally I
feel this is ugly and cumbersome.

Luckily we can have webpack compile our CSS files as well as our JS files.  For this
we will use the `extract-text-webpack-plugin`.

Let's go ahead and install this plugin:
```
npm install --save-dev extract-text-webpack-plugin
```

We'll also need to install some new loaders to work with our styles and css.  The
style loader adds css to the DOM by injecting a `<style>` tag.
```
npm install --save-dev css-loader style-loader
```

We need to configure webpack to use this plugin.  NOTE: This is webpack v1.

#webpack.config.js
```
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ExtractTextPluginConfig = new ExtractTextPlugin('app.css', {
  allChunks: true
});

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
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [ExtractTextPluginConfig]
};
```

Here we import the extract-text-webpack-plugin.  We follow the config notes and
instantiate the plugin with the file we want to output too.  We add another loader
to test for `.css` files.  We load these files through the plugin and the style and
css loader.  Finally we tell webpack of the plugin we are using in the plugins section.

Lets add some CSS! In your app directory create a styles folder and create a `main.css` file

#app/styles/main.css
```
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  width: 100%;}

.game-board {
  width: 17%;
  margin: 0 auto;
}

.game-info {
  width: 10%;
  text-align: center;
  margin: 0 auto;
}
```

Lets run the dev server again `npm start`
