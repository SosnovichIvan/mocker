import * as Styled from './index.styled'

export const FieldText = (props: any) => (
  <Styled.InputField {...props} placeholder={props.text} />
)

export const FieldPassword = (props: any) => (
  <Styled.InputFieldPassword {...props} placeholder={props.text} />
)
