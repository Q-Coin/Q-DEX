const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new Htmlwebpackplugin({
      template: "./src/index.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, "./dist"),
    },
    open: true,
    hot: true,
    port: 9000
  }
};
