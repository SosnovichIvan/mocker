import { ProjectTheme } from './index.types'

export const useGetTheme = (): ProjectTheme => {
  return {
    colors: {
      background: {
        dark: '#131318',
        blue: '#004DE5',
      },
      text: {
        white: '#FFFFFF',
        gray: '#5B5B5B',
        darkGray: '#3A3D4D',
      },
      border: {
        darkGray: '#3A3D4D',
      },
    },
  }
}
