import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { WebpackConfiguration } from 'webpack-dev-server'

export function buildOptimization(
  isProduction: boolean,
): WebpackConfiguration['optimization'] {
  const config: WebpackConfiguration['optimization'] = {
    splitChunks: {
      chunks: 'all',
    },
  } as WebpackConfiguration['optimization']

  if (isProduction) {
    config!.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()]
  }

  return config
}
