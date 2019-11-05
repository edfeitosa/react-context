const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const selfScriptStyles = 'https://fonts.googleapis.com';
const publishFolder = '/public';

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/${publishFolder}`,
    publicPath: '',
    filename: './bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.ejs`,
      filename: `${__dirname}/${publishFolder}/index.html`,
      lang: 'pt-BR',
      title: 'React Context',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
      },
      scripts: [
        { src: 'env.js' }
      ],
      links: [
        { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"' },
        { href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }),
    new CspHtmlWebpackPlugin({
      'base-uri': "'self'",
      'object-src': "'none'",
      'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      'style-src': [`'self' ${selfScriptStyles}`, "'unsafe-eval'", "'unsafe-inline'"]
    }, {
      enabled: true,
      hashingMethod: 'sha256',
      hashEnabled: {
        'script-src': false,
        'style-src': false
      },
      nonceEnabled: {
        'script-src': false,
        'style-src': false
      }
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  devServer: {
    contentBase: `${__dirname}/${publishFolder}`,
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
};