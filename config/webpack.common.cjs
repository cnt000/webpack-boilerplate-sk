const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const indexJsFile = path.join(__dirname, '..', 'static', 'js', 'index.js');
const printJsFile = path.join(__dirname, '..', 'static', 'js', 'print.js');

const indexTsFile = path.join(__dirname, '..', 'static', 'ts', 'index.ts');

module.exports = {
  entry: {
    app: indexJsFile,
    appTs: indexTsFile,
    print: printJsFile,
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /(\.woff(2)?|\.eot|\.ttf|\.otf|datauriSvg\/.*?\.svg)$/,
        type: 'asset/inline',
        exclude: /node_modules/,
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: path.join('..', 'dist', '[name].bundle.js'),
    path: path.resolve(__dirname, '..', 'dist'),
    assetModuleFilename: 'images/[name][hash][ext][query]',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
  },
};
