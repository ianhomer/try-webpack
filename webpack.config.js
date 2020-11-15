const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main/js/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./target/webapp",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
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
