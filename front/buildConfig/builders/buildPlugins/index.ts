import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = (
  isAnalysed: boolean,
  publicPath: string,
): WebpackPluginInstance[] => [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new HtmlWebpackPlugin({
    template: publicPath + '/index.html',
    filename: 'index.html',
    // favicon: publicPath + '/favicon.ico',
    manifest: publicPath + '/manifest.json',
  }),
  new Dotenv(),
  new webpack.ProgressPlugin(),
  new CleanWebpackPlugin(),
  ...(isAnalysed ? [new BundleAnalyzerPlugin()] : []),
]
