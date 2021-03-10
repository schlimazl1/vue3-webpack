import { merge } from 'webpack-merge'
import base from './webpack.config.base'
import dev from './webpack.config.dev'
import prod from './webpack.config.prod'
import { Configuration } from 'webpack'

export default (env: Record<string, boolean | string | number>): Configuration => {
  const isProd = env.production === true
  if (isProd) {
    return merge(base, prod)
  }
  return merge(base, dev)
}
