import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { Configuration } from 'webpack'
import MiniCssExtractPlugins from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugins.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 根据 ouput.path 来删除文件夹
    new MiniCssExtractPlugins({ // 提取 css 以 link 的方式载入 css
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public'} // 将 public 拷贝到打包目录的 public 下 /dist/public  
      ]
    })
  ]
} as Configuration

