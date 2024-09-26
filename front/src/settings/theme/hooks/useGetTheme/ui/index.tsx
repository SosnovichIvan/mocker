import { ProjectTheme } from './index.types'

export const useGetTheme = (): ProjectTheme => {
  return {
    numbers: {
      zero: 0,
      one: 1,
    },
    color: {
      bg: '#131318',
      textColorDark: '#5B5B5B',
      bgButtonColor: '#004DE5',
      blue: '#004DE5',
      border: '#3A3D4D',
      text: '#FFFFFF',
    },
  }
}
