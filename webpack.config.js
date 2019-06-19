const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  //Different output option for production and development modes
  const output = (options.mode == 'production') ? {} :
    {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
    };
  return {
    output,
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: options.mode === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src/'),
        Mocks: path.resolve(__dirname, 'src/__mocks__/'),
        Tests: path.resolve(__dirname, 'src/__tests__/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Redux: path.resolve(__dirname, 'src/redux/')
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };
};
