import { TitleProps } from './index.types'

import * as Styled from './index.styled'

export const Title = (props: TitleProps) => {
  const { children, level } = props

  return <Styled.TitleWrapper {...{ level }}>{children}</Styled.TitleWrapper>
}
