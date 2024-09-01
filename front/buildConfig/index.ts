import { buildDevServer } from './builders/buildDevServer'
import { buildLoaders } from './builders/buildLoaders'
import { buildOptimization } from './builders/buildOptimization'
import { buildPlugins } from './builders/buildPlugins'
import { buildResolvers } from './builders/buildResolver'

import { BuildOptions } from './index.types'

export function buildWebpackConfig(options: BuildOptions) {
  const { publicPath, sourcePath, isProduction, isAnalysed, output } = options

  return {
    entry: {
      app: sourcePath + '/index.tsx',
    },
    devtool: isProduction ? 'source-map' : 'eval',
    optimization: buildOptimization(isProduction),
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
      ...(isProduction ? { publicPath: '/frontend/' } : { publicPath: '/' }),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    devServer: buildDevServer(),
    plugins: buildPlugins(isAnalysed, publicPath),
    module: {
      rules: buildLoaders(isProduction, sourcePath),
    },
    resolve: buildResolvers(sourcePath),
  }
}
