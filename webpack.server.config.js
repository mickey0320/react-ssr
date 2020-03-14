const path = require("path")
const nodeExternals = require("webpack-node-externals")
const merge = require("webpack-merge")

const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: {
    app: path.join(__dirname, "src/server/app.js")
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].server.bundle.js"
  },
  module: {
    rules: [
      {
        test: /jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
})
