import { PasswordProps } from './ui/password'
import { TextProps } from './ui/text'

type FieldType = 'text' | 'password'
type ErrorMessage =
  | 'Пожалуйста, введите  логин/email'
  | 'Минимум 6 символов'
  | 'Пожалуйста, введите  пароль'

export type FieldValue = string | number | null

export type FieldData<T extends FieldType, D> = {
  type: T
  data?: D
  name: string
  placeholder?: string
  rule?: {
    require?: boolean
    min?: number
    message: ErrorMessage
  }[]
}

export type FormFieldSprops = {
  field: FormField
}

export type FormField = TextField | PasswordField

type TextField = FieldData<'text', TextProps>
type PasswordField = FieldData<'password', PasswordProps>
