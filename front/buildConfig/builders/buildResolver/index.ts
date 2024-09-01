import { ResolveOptions } from 'webpack'

export const buildResolvers = (sourcePath: string): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  alias: {
    app: sourcePath + '/app/',
    pages: sourcePath + '/pages/',
    widgets: sourcePath + '/widgets/',
    features: sourcePath + '/features/',
    entities: sourcePath + '/entities/',
    shared: sourcePath + '/shared/',
    providers: sourcePath + '/providers/',
  },
})
