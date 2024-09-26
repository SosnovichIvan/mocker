import { Input } from 'antd'
import styled from 'styled-components'

export const InputField = styled(Input)`
  padding: 15px 20px 15px 20px;
  background: none;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 4px;
  width: 100%;
  color: ${props => props.theme.color.text};
  &::placeholder {
    color: ${props => props.theme.color.border};
    height: 47px;
  }
`
export const InputFieldPassword = styled(Input.Password)`
  padding: 15px 20px 15px 20px;
  background: none;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 4px;
  width: 100%;
  color: ${props => props.theme.color.text};
  input {
    &::placeholder {
      color: ${props => props.theme.color.border};
    }
  }
  height: 47px;
`
