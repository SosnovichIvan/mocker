import { Layout } from 'antd'
import { styled } from 'styled-components'

const { Header, Content, Sider, Footer } = Layout

export const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const LayoutBlock = styled(Layout)`
  width: 100%;
  height: 100%;
  background-color: #fff;
`

export const LayoutHeader = styled(Header)`
  width: 100%;
  height: 70px;

  background-color: #fff;
  border-bottom: 1px solid grey;
`

export const LayoutContent = styled(Content)`
  padding: 16px;

  flex: 6 1 75%;
  height: 100%;
  background: #fff;
`

export const LayoutSider = styled(Sider)`
  height: 100%;
  flex: 6 1 25%;
  background: none !important;
  border-right: 1px solid grey;
  min-width: 200px;
`

export const LayoutFooter = styled(Footer)`
  width: 100%;
  height: 70px;

  background-color: #fff;
  border-top: 1px solid grey;
`
