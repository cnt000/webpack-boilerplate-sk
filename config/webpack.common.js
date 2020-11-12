const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const paths = require('./paths');

const indexJsFile = path.join(paths.jsSrc, 'index.js');
const indexReactFile = path.join(paths.jsSrc, 'index-react.js');
const indexTsFile = path.join(paths.tsSrc, 'index.ts');

module.exports = {
  entry: {
    app: indexJsFile,
    appTs: indexTsFile,
    indexReact: indexReactFile,
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: path.join('..', 'dist', '[name].bundle.js'),
    path: paths.build,
    assetModuleFilename: 'images/[name][hash][ext][query]',
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
    extensions: ['.ts', '.js'],
  },
  optimization: {
    moduleIds: 'deterministic',
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    // alias for  {name: 'runtime'}
    runtimeChunk: 'single',
  },
};
