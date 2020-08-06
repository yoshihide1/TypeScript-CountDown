const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [ '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}