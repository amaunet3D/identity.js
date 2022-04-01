module.exports = {
  target: 'node16',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              target: 'es2021'
            }
          }
        }
      },
      {
        test: /\.(cypher)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'cypher-loader',
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
  externals: [
    require('webpack-node-externals')(),
  ],
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
        },
      ]
    }),
  ],
  output: {
    path: require('path').resolve(__dirname, '..', '.dist'),
    filename: '[name].js',
    clean: true,
  }
}
