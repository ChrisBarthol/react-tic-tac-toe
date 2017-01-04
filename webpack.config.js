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
  plugins: [ExtractTextPluginConfig],
  devServer: {
    inline: true,
    port: 8081
  }
};
