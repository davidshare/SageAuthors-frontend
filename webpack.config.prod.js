const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      /** You can specify an HTML file here which will server as a template.
       * This template will be used when generating the final html file
       * if skiped, it will generate a simple html file.
       */
      title: 'OKK app',
      template: path.resolve('./public/index.html'),
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
            outpath: './src/assets/images',
            /* on build, webpack generates a hash for the image names.
            This line makes sure that it does not */
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
