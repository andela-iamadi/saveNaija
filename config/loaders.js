export default [
  {
    test: /src\/js\/.+.js$/,
    exclude: /node_modules/,
    loader: 'babel'
  },
  // SASS
  {
    test: /css\/.+.(scss|css)$/,
    loaders: ['style', 'css', 'sass']
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    loader: 'url?limit=25000'
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.html$/,
    loader: 'html-loader?attrs[]=video:src'
  }, {
    test: /\.mp4$/,
    loader: 'url?limit=10000&mimetype=video/mp4'
  }
]