const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');


module.exports  =  merge(common,{
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'src')
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    hot: true
  },
});