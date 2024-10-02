import { InputData } from 'supporting/types'

import * as Styled from './index.styled'

export const InputPassword = (props: InputData) => {
  const { text } = props

  return <Styled.Field.Password placeholder={text} />
}
