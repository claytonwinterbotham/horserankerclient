var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}  
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'png']
  },
  
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
