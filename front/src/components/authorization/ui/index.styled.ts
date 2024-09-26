import styled from 'styled-components'

type IsValue = {
  IsValue: boolean
}

export const AuthorizationWrapper = styled('div')<IsValue>`
  width: 300px;
  text-align: center;
  transition: all 1s linear;
  opacity: ${props =>
    props.IsValue ? props.theme.numbers.one : props.theme.numbers.zero};
`

export const AuthorizationLogo = styled('img')`
  border-radius: 100%;
  width: 100px;
  height: 100px;
`

export const AuthorizationTitle = styled('h1')`
  color: white;
  font-size: 24px;
  line-height: 30px;
  margin: 20px auto;
`

export const AuthorizationText = styled('span')`
  color: ${props => props.theme.color.textColorDark};
`

export const AuthorizationButton = styled('button')`
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  color: ${props => props.theme.color.bgButtonColor};
`
