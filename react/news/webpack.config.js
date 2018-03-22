const path = require('path');
const webpack = require('webpack');

const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/app.js',
    vendor: ['react', 'antd']
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // importLoaders: 1
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    historyApiFallback: true
  },
  // performance: {
  //   hints: 'warning',
  //   maxEntrypointSize: 100000, // bytes
  //   maxAssetSize: 450000
  // },
  plugins: [
    // new BabiliPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devtool: 'source-map',
}

