var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/assets'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-3']
            }
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader'
            }]
        }
        ]
    },
    devServer: {
      historyApiFallback: {
        index: 'dist/index.html'
      }
    }
}

