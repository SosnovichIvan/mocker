import path from 'path'

import { buildWebpackConfig } from './buildConfig'

export default () => {
  const isProduction = process.env.NODE_ENV === 'production'
  const isAnalysed = process.env.analyze === 'true'

  const publicPath = path.resolve(__dirname, 'public')
  const sourcePath = path.resolve(__dirname, 'src')
  const output = path.resolve(__dirname, 'build')

  return buildWebpackConfig({
    publicPath,
    sourcePath,
    isProduction,
    isAnalysed,
    output,
  })
}
