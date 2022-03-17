module.exports = {
  target: 'node16',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /\(node_modules\)/,
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
    modules: [
      'node_modules'
    ],
    alias: {
      src: require('path').resolve(__dirname, '..', 'src'),
    },
    fallback: {}
  },
  externals: [
    require('webpack-node-externals')()
  ],
  plugins: [
    new (require('copy-webpack-plugin'))({
      patterns: [
        {
          from: 'src',
          to: 'proto/[name][ext]',
          filter: path => path.endsWith('.proto')
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

