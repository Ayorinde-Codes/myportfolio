const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

// module.exports = {
//   entry: ['./src/index.js'],
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: 'bundle.js'
//   },
//   devtool: "source-map",
//   plugins: [
//     new Dotenv({
//       systemvars: true
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "public", "index.html"),
//       // template: "src/index.html",
//     })
//   ],
//   devServer: {
//     port: 3030, // you can change the port
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // .js and .jsx files
//         exclude: /node_modules/, // excluding the node_modules folder
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/, // styles files
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
//         loader: "url-loader",
//         options: { limit: false },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ["*", ".js", ".jsx"],
//   },
// };

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
      	   'style-loader',
           'css-loader',
        ],
      }
    ]
  },

  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    })
  ],
};