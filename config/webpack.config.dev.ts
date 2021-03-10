import { Configuration } from "webpack"

export default {
  mode: 'development',
  devServer: {
    port: 8080,
    // hotOnly: true
    // hot: true,
    index: 'home.html'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
} as Configuration
