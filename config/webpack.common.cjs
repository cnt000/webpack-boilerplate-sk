const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const indexJsFile = path.join(__dirname, '..', 'static', 'js', 'index.js')
const printJsFile = path.join(__dirname, '..', 'static', 'js', 'print.js')

module.exports = {
  entry: {
    app: indexJsFile,
    print: printJsFile,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: path.join('..', 'dist', '[name].bundle.js'),
    path: path.resolve(__dirname, '..', 'dist'),
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
