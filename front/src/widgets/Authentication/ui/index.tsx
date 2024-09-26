import { useState } from 'react'

import { Authorization } from 'components/authorization'
import { Overlap } from 'components/overlap'
import { Registration } from 'components/registration'

import * as Styled from './index.styled'

export const Authentication = () => {
  const [value, setRegistration] = useState<boolean>(true)
  const shapeOverlap = () => {
    setRegistration(!value)
  }

  return (
    <Styled.Section isValue={value}>
      <Styled.Wrappen>
        <Registration value={value} />
        <Authorization {...{ shapeOverlap, value }} />
        <Overlap value={value} />
      </Styled.Wrappen>
    </Styled.Section>
  )
}
