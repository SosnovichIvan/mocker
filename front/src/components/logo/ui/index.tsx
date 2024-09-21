// eslint-disable-next-line import/extensions
import LogoImage from 'supporting/image/logo.png'

import * as Styled from './index.styled'

export const Logo = () => {
  return (
    <Styled.LogoWrapper>
      <img src={LogoImage} alt="logo with app" />
    </Styled.LogoWrapper>
  )
}
