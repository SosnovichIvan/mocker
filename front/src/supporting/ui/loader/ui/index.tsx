import { Spin } from 'antd'

import * as Styled from './index.styled'

export const Loader = () => {
  return (
    <Styled.LoaderWrapper>
      <Spin size="large" />
    </Styled.LoaderWrapper>
  )
}
