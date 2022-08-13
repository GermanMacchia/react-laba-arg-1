const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/source',
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]',
        },
      },
      {
        test:/\.svg$/i,
        type: 'asset/source',
        loader: 'file-loader',
        options: {
          name: './images/icons/[name].[ext]',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html'
  })],
};
