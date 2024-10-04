import { Rule } from 'antd/es/form'

import { PasswordProps, TextProps } from './fields'

export type FormFieldProps = {
  field: FormField
}

type FieldType = 'text' | 'password'

export type FormField = TextField | PasswordField

export type FieldValue = string | number | null

export type FieldData<T extends FieldType, D> = {
  type: T
  data?: D
  name: string
  placeholder?: string
  id: string
  rules?: Rule[]
}
type TextField = FieldData<'text', TextProps>
type PasswordField = FieldData<'password', PasswordProps>
