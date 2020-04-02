module.exports = {
  devServer: {
    overlay: false,
  },
  publicPath: process.env.NODE_ENV === 'development'
    ? '/'
    : '/BeautyHouse/dist/',
  productionSourceMap: false,
  // configureWebpack: {
  //   module: {
  //     rules: [{
  //       test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  //       use: [
  //         // 'file-loader',
  //         {
  //           loader: 'url-loader',
  //           options: {
  //             limit: 100,
  //             outputPath: 'img',
  //           },
  //         },
  //         {
  //           loader: 'image-webpack-loader',
  //           options: {
  //             bypassOnDebug: true, // webpack@1.x
  //             disable: true, // webpack@2.x and newer
  //           },
  //         },
  //       ],
  //     },
  //     ],
  //   },
  // },

};
