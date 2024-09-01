import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export function buildLoaders(
  isProduction: boolean,
  sourcePath: string,
): webpack.RuleSetRule[] {
  const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : 'style-loader'

  const babelLoader = {
    test: /\.(jsx|js)$/,
    include: sourcePath,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: 'defaults',
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
    ],
  }
  const typescriptLoader = {
    test: /\.(ts|tsx)$/i,
    exclude: ['/node_modules/'],
    use: {
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          noEmit: false,
        },
      },
    },
  }
  const cssLoader = {
    test: /\.css$/i,
    use: [stylesHandler, 'css-loader', 'postcss-loader'],
  }
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }
  const assetLoader = {
    test: /\.(eot|woff|woff2|png|jpg|gif)$/i,
    type: 'asset',
  }
  const fileLoader = {
    test: /\.ttf$/,
    type: 'asset/resource',
  }

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    sassLoader,
    svgLoader,
    fileLoader,
    assetLoader,
  ]
}
