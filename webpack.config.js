var path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  performance: {
    hints: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      title: "test",
      filename: "./index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
