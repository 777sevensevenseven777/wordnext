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
        test: /\.s(a|c)ss$/,
        // exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              sourceMap: true,
              importLoaders: 1,
              modules: true
              // modules: {
                // namedExport: true,
                // localIdentName: 'wordnext__[name]__[local]',
              // },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.css', '.scss'],
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
        { from: 'src/styles/main.css', to: 'styles' },
        { from: 'src/fonts', to: 'fonts' },
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