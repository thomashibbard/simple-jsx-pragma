const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const paths = {
  src: resolve(__dirname, "src"),
  dist: resolve(__dirname, "dist")
};

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: resolve(paths.src, "js", "index.js"),
  output: {
    path: paths.dist,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      Lib: resolve(paths.src, "js", "lib"),
      Utils: resolve(paths.src, "js", "utils")
    },
    extensions: [".js", ",jsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
