const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Ensure this is imported

module.exports = {
  entry: "./src/scripts/app.js", // Your entry JavaScript file
  output: {
    filename: "[name].[contenthash].js", // JavaScript output file with content hash for cache busting
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "production", // Make sure the build is in production mode
  devtool: "source-map", // Source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader", // Resolves CSS imports
        ],
      },
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/,
        use: "babel-loader", // Transpile JavaScript using Babel
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Your HTML template
      inject: "body", // Injects JS into the body of the HTML
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Output CSS file with content hash for cache busting
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Split code into smaller chunks for optimization
    },
  },
};
