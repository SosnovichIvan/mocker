import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(): WebpackDevServerConfiguration {
  return {
    open: true,
    host: 'localhost',
    port: 3000,
    client: {
      logging: 'info',
      overlay: {
        runtimeErrors: error => {
          if (
            error?.message ===
            'ResizeObserver loop completed with undelivered notifications.'
          ) {
            console.error(error)

            return false
          }

          return true
        },
      },
    },
    historyApiFallback: true,
    hot: true,
  }
}
