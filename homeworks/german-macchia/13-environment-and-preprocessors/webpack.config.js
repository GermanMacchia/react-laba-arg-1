const path = require('path')
module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  }
};
