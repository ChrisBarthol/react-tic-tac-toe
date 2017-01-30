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
  },

  devServer: {
    inline: true,
    port: 8083
  }
}
