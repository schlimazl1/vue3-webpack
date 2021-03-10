import HtmlWebpackPlugin from 'html-webpack-plugin'
import { glob } from 'glob'

export function generatePageList (): HtmlWebpackPlugin[] {
  // 模板
  // new HtmlWebpackPlugin({
  //   title: 'home',
  //   template: './src/pages/home/index.html',
  //   filename: 'home.html',
  //   chunks: ['home']
  // }),
  // new HtmlWebpackPlugin({
  //   title: 'about',
  //   template: './src/pages/about/index.html',
  //   filename: 'about.html',
  //   chunks: ['about']
  // }),
  try {
    const files = glob.sync('src/pages/*')
    // console.log('files', files)
    if (files.length) {
      return files.map(item => {
        const name = item.split('/').pop()
        return new HtmlWebpackPlugin({
          title: name,
          template: `./${item}/index.html`,
          filename: name + '.html',
          chunks: [name!]
        })
      })
    }
    return []
  } catch (e) {
    throw e
  }
}