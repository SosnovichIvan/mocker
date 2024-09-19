import { Logo } from 'components/logo'
import { Outlet } from 'react-router-dom'

import { useInitData, usePing, useRedirect } from '../hooks'

import * as Styled from './index.styled'

export const InitWrapper = () => {
  const { isLoadingInitData } = useInitData()
  usePing()
  useRedirect()

  if (isLoadingInitData) {
    return (
      <Styled.InitWrapper>
        <Logo />
      </Styled.InitWrapper>
    )
  }

  return (
    <>
      <Outlet />
    </>
  )
}
