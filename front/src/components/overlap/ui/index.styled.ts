import styled from 'styled-components'
// eslint-disable-next-line import/extensions
import img from 'supporting/image/auth/backgroundEllipses.png'

type IsValue = {
  IsValue: boolean
}

export const OverlapWrapper = styled('div')<IsValue>`
  background: none;
  width: 50%;
  height: 100vh;
  position: absolute;
  transform: ${props =>
    props.IsValue ? 'translateX(-50%)' : 'translateX(50%)'};
  transition: all 1s linear;
  background-color: rgba(0, 77, 229, 0.7);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    height: inherit;
    width: 100%;
    z-index: -1;
  }
`
export const OverlapBlock = styled('div')`
  max-width: 998px;
  padding: 70px 60px;
`
export const OverlapBlockHeader = styled('div')`
  display: flex;
  background: none;
  margin: 0;
  padding: 0;
  height: auto;
  gap: 20px;
  margin-bottom: 100px;
`
export const OverlapBlockHeaderLogo = styled('div')`
  width: 30px;
  height: 30px;
  background: ${props => props.theme.color.blue};
  border-radius: 100px;
  color: white;
  line-height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OverlapBlockHeaderApplicationName = styled('span')`
  color: white;
  line-height: 30px;
  font-size: 24px;
`
export const OverlapSlogan = styled('p')`
  margin: 0;
  padding: 0;
  color: white;
  line-height: 50px;
  font-size: 40px;
  margin-bottom: 100px;
`
