import { join } from 'path'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'
import { generatePageList } from './utils'
import { Configuration } from 'webpack'

export default {
  entry: {
    home: './src/pages/home/index.ts',
    about: './src/pages/about/index.ts'
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    // npm i vue-loader vue-style-loader ts-loader css-loader babel-loader @babel/core @vue/babel-preset-app vue-template-compiler -D
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader', // 需要处理 tsx, 将 ts 转换成 js 
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.js'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [
    ...generatePageList(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    })
  ]
} as Configuration
