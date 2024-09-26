import styled from 'styled-components'

import img from './../../../supporting/image/auth/backgroundEllipse.png'
type IsValue = {
  isValue: boolean
}
export const Section = styled('div')<IsValue>`
  background-color: ${props => props.theme.color.bg};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  position: releative;
  &::after {
    content: '';
    position: absolute;
    background-image: url(${img});
    width: 200px;
    height: 461px;
    right: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity:${props => (props.isValue ? props.theme.numbers.one : props.theme.numbers.zero)};
    transition:all 1s linear;
}
  }
`

export const Wrappen = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`
