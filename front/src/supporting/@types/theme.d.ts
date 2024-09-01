import type { ProjectTheme } from 'settings/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ProjectTheme {}
}
