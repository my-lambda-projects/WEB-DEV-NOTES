const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  node: false,
  target: 'node',
  mode: 'production',
  entry: {
    'app-bundle': './src/calling/externalApp/index.ts',
    'preload': './src/calling/externalApp/preload.ts',
    'main': './src/calling/externalApp/main.ts'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
     new CopyWebpackPlugin(
       {
          patterns: [
            { from: 'src/calling/externalApp/index.html', to: 'index.html' }
          ]
        }),
    new webpack.ExternalsPlugin('commonjs', [
        'electron',
        'dynamicloader'
     ])
    ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'out/calling/externalApp/dist/')
  }
};