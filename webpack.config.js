const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  watch: true,
  output: {
    publicPath: '/',
  },
  watchOptions: {
    poll: 2000, // check file changes every two seconds
    aggregateTimeout: 1000,
    ignored: /node_modules/,
  },
  devtool: 'source-maps',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      /** You can specify an HTML file here which will server as a template.
       * This template will be used when generating the final html file
       * if skiped, it will generate a simple html file.
       */
      title: 'Okk App',
      template: path.resolve('./public/index.html'),
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(envKeys),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-runtime',
                ],
              },
            ],
          },
        },
      },
      {
        test: /\.(jpeg|jpg|gif|png|svg|)$/,
        use: {
          loader: 'file-loader',
          options: {
            outpath: './public/images/',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/],
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};
