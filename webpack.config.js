var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: { components: './client/components/components.js' },
  output: {
    path: 'client/components',
    filename: 'components_bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.css$/,
        loader : 'style!css'
      },
      {
        test : /\.html$/,
        loader : 'raw!html-minify'
      }
    ]
  }
}
