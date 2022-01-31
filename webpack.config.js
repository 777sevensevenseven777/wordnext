const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// tsconfig outdir
// webpack library
// webpack side effects
// webpack --watch

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: require('styled-jsx/webpack').loader,
      //       options: {
      //         type: 'scoped'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // '@babel/preset-env',
              '@babel/preset-react',
              // '@babel/preset-typescript',
            ],
            plugins: [
              // 'styled-jsx/babel'
            ]
          }
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[hash][ext][query]',
    // library: {
    //   name: 'wordnext',
    //   type: 'commonjs'
    // }
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles/[name].css',
    // }),
    new CopyPlugin({
      patterns: [
        { from: 'src/styles/main.css', to: 'styles' },
        { from: 'src/fonts', to: 'fonts' },
        { from: 'src/images', to: 'images' },
      ]
    }),
    new CleanWebpackPlugin(),
  ],
  externals: {
    next: 'next',
    react: 'react',
    'react-dom': 'react-dom'
  }
};