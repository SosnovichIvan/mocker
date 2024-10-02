import { InputProps } from './input.types'

import * as Styled from './index.styled'

export const InputText = (props: InputProps) => {
  const { placeholder } = props

  return <Styled.InputTextWrapper {...{ placeholder }} />
}
