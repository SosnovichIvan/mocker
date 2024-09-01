import { ResolveOptions } from 'webpack'

export const buildResolvers = (sourcePath: string): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  alias: {
    app: sourcePath + '/app/',
    pages: sourcePath + '/pages/',
    widgets: sourcePath + '/widgets/',
    features: sourcePath + '/features/',
    components: sourcePath + '/components/',
    supporting: sourcePath + '/supporting/',
    settings: sourcePath + '/settings/',
  },
})
