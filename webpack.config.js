const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

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
          options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/proposal-class-properties',
							'@babel/proposal-object-rest-spread',
							'@babel/transform-react-jsx',
						],
					},
        }
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
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
    poll: 1000
  }
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  
};


