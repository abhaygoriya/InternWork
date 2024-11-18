const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  devServer: {
    static: path.join(__dirname, "assets", "scripts"), // Serve files from 'dist' folder
    compress: true,
    port: 3000, // You can change this to any other port if needed
    hot: true,
    open: true,
    historyApiFallback: true, // This is useful for SPAs
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // The template for the HTML file
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
};
