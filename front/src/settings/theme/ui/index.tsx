import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { useGetTheme } from '../hooks/useGetTheme'

import { ThemeProviderProps } from './index.types'

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props

  const theme = useGetTheme()

  return <StyledThemeProvider {...{ theme }}>{children}</StyledThemeProvider>
}
