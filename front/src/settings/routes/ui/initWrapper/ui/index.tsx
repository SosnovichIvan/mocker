import { Outlet } from 'react-router-dom'
// eslint-disable-next-line import/extensions
import LogoImage from 'supporting/image/logo.png'

import { useInitData, usePing, useRedirect } from '../hooks'

import * as Styled from './index.styled'

export const InitWrapper = () => {
  const { isLoadingInitData } = useInitData()
  usePing()
  useRedirect()

  if (isLoadingInitData) {
    return (
      <Styled.InitWrapper>
        <img src={LogoImage} alt="load image logo" />
      </Styled.InitWrapper>
    )
  }

  return (
    <>
      <Outlet />
    </>
  )
}
