const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main/js/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'target/webapp/src/main/webapp')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Title from webpack config",
      filename: "src/main/webapp/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "target/webapp"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
