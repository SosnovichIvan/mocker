import { HeaderApp } from 'components/headerApp'

import { MainLayoutProps } from './index.types'

import * as Styled from './index.styled'

export const MainLayout = (props: MainLayoutProps) => {
  const { children, leftBar } = props

  return (
    <Styled.LayoutWrapper>
      <Styled.LayoutBlock>
        <HeaderApp />
        <Styled.LayoutBlock>
          <Styled.LayoutSider>{leftBar}</Styled.LayoutSider>
          <Styled.LayoutContent>{children}</Styled.LayoutContent>
        </Styled.LayoutBlock>
        <Styled.LayoutFooter>Footer</Styled.LayoutFooter>
      </Styled.LayoutBlock>
    </Styled.LayoutWrapper>
  )
}
