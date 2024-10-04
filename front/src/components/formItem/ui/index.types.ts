import { Rule } from 'antd/es/form'

import { PasswordProps } from './ui/password'
import { TextProps } from './ui/text'

type FieldType = 'text' | 'password'

export type FieldValue = string | number | null

export type FieldData<T extends FieldType, D> = {
  type: T
  data?: D
  name: string
  placeholder?: string
  id: string
  rules?: Rule[]
}

export type FormFieldSprops = {
  field: FormField
}

export type FormField = TextField | PasswordField

type TextField = FieldData<'text', TextProps>
type PasswordField = FieldData<'password', PasswordProps>
