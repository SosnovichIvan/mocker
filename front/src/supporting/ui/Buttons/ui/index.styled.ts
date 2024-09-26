import { Button } from 'antd'
import styled from 'styled-components'

export const Buttons = styled(Button)`
  width: 100%;
  background: ${props => props.theme.color.blue};
  border: 0;
  border-radius: 4px;
  padding: 10px 0;
  cursor: pointer;
`
