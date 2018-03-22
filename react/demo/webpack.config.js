const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/router.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
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
      // {
      //   test: /\.css$/,
      //   // exclude: path.resolve(__dirname, 'node_modules'),
      //   use: [
      //     'style-loader',
      //     'css-loader?importLoaders=1'
      //   ]
      // },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    historyApiFallback: true
  }
}

