import { Inputs } from 'supporting/constants/inputData'
import { Forms } from 'supporting/ui/Form/ui'

import * as Styled from './index.styled'

export const Registration = (prop: { value: boolean }) => {
  const { value } = prop

  return (
    <Styled.RegistrationWrapper IsValue={value}>
      <Styled.RegistrationTitle>Регистрация</Styled.RegistrationTitle>
      <Forms data={Inputs.registration} textButton="Регистрация" />
    </Styled.RegistrationWrapper>
  )
}
