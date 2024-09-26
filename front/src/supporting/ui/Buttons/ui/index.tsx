import { value } from './index.type'

import * as Styled from './index.styled'

export const Buttons = (text: value) => {
  return (
    <Styled.Buttons type="primary" htmlType="submit">
      {text.text}
    </Styled.Buttons>
  )
}
