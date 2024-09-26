import styled from 'styled-components'

type IsValue = {
  IsValue: boolean
}

export const RegistrationWrapper = styled('div')<IsValue>`
  width: 300px;
  text-align: center;
  transition: all 2s linear;
  opacity: ${props =>
    props.IsValue ? props.theme.numbers.zero : props.theme.numbers.one};
`
export const RegistrationTitle = styled('h1')`
  color: white;
  font-size: 24px;
  line-height: 30px;
`
