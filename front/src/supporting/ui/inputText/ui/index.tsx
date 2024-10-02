import { InputData } from 'supporting/types'

import * as Styled from './index.styled'

export const InputText = (props: InputData) => {
  const { text } = props

  return <Styled.Field placeholder={text} />
}
