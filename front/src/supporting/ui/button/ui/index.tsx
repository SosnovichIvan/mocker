import { ButtonProps } from './index.types'

import * as Styled from './index.styled'

export const Button = (props: ButtonProps) => {
  const { children, htmlType } = props

  return (
    <Styled.ButtonWrapper {...{ htmlType }}>{children}</Styled.ButtonWrapper>
  )
}
