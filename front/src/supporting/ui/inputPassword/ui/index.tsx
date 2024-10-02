import { InputProps } from './index.types'

import * as Styled from './index.styled'

export const InputPassword = (props: InputProps) => {
  const { placeholder } = props

  return <Styled.InputPasswordWrapper {...{ placeholder }} />
}
