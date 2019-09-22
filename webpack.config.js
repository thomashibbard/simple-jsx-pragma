const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_EN;
const IS_PRODUCTION = NODE_ENV === "production";
const IS_DEVELOPMENT = !IS_PRODUCTION;

const paths = {
  src: resolve(__dirname, "src"),
  dist: resolve(__dirname, "dist")
};

module.exports = {
  context: __dirname,
  devtool: IS_DEVELOPMENT ? "source-map" : false,
  mode: NODE_ENV,
  entry: resolve(paths.src, "js", "index.tsx"),
  output: {
    path: paths.dist,
    filename: "bundle-[hash].js"
  },
  resolve: {
    alias: {
      "@Lib": resolve(paths.src, "js", "lib"),
      "@Utils": resolve(paths.src, "js", "utils"),
      "@V": resolve(paths.src, "js", "lib", "V")
    },
    extensions: [".js", ",jsx", ".ts", ".tsx"]
  },
  externals: {
    V: "V"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      V: "V"
    }),
    new HtmlWebPackPlugin({
      title: "Simple JSX Pragma",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
