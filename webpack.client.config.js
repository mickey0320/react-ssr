const path = require("path")
const merge = require("webpack-merge")

const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src/client/app.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].client.bundle.js"
  }
})
