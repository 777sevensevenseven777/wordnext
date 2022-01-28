const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDevelopment ? 'style-loader?sourceMap' : MiniCssExtractPlugin.loader,
          'css-loader?esModule'
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        // { from: 'src/styles/load-styles.css', to: 'styles' },
        { from: 'src/fonts', to: 'fonts' },
        { from: 'src/images', to: 'images' },
      ]
    }),
    // new CleanWebpackPlugin(),
  ],
  externals: {
    next: 'next',
    react: 'react',
    'react-dom': 'react-dom'
  }
};