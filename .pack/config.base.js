module.exports = {
  target: 'node16',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'swc-loader'
        }
      },
    ]
  },
  resolve: {
    extensions: [
      '*',
      '.js',
    ],
    alias: {
      src: require('path').resolve(__dirname, '..', 'src'),
      env: require('path').resolve(__dirname, '..', 'env'),
    },
    fallback: {}
  },
  externals: {
    '@grpc/proto-loader': 'commonjs @grpc/proto-loader',
    '@grpc/grpc-js': 'commonjs @grpc/grpc-js'
  },
  plugins: [
    new (require('copy-webpack-plugin'))({
      patterns: [
        {
          from: 'src',
          to: 'proto/[name][ext]',
          filter: path => path.endsWith('.proto')
        },
        {
          from: 'env',
          to: 'env/[name][ext]',
          filter: path => path.includes('settings.')
        }
      ]
    }),
  ],
  output: {
    path: require('path').resolve(__dirname, '..', '.dist'),
    filename: '[name].js',
    clean: true,
  }
}

