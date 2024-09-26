import { Inputs } from 'supporting/constants/inputData'
// eslint-disable-next-line import/extensions
import logo from 'supporting/image/auth/logoMini.png'
import { Forms } from 'supporting/ui/Form/ui'

import { PropsType } from './index.types'

import * as Styled from './index.styled'

export const Authorization = (props: PropsType) => {
  const { shapeOverlap, value } = props

  return (
    <Styled.AuthorizationWrapper IsValue={value}>
      <Styled.AuthorizationLogo src={logo} />
      <Styled.AuthorizationTitle>
        Добро пожаловать, давай начнем!
      </Styled.AuthorizationTitle>
      <Forms data={Inputs.auth} textButton="ВХОД" />
      <Styled.AuthorizationText>
        Ещё нет аккаунта?{' '}
        <Styled.AuthorizationButton onClick={() => shapeOverlap()}>
          Зарегистрироваться
        </Styled.AuthorizationButton>
      </Styled.AuthorizationText>
    </Styled.AuthorizationWrapper>
  )
}
