import { Outlet } from 'react-router-dom'
import { Loader } from 'supporting/ui/loader'

import { useInitData, usePing } from '../hooks'

import * as Styled from './index.styled'

export const Layout = () => {
  const { isLoading } = useInitData()
  usePing()

  if (isLoading) {
    return (
      <Styled.LayoutWrapper>
        <Loader />
      </Styled.LayoutWrapper>
    )
  }

  return (
    <Styled.LayoutWrapper>
      <Outlet />
    </Styled.LayoutWrapper>
  )
}
