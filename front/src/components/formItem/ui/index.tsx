import { Password } from './fields/password'
import { Text } from './fields/text'

import { FormFieldProps } from './index.types'

export const FormItemField = (props: FormFieldProps) => {
  const { field } = props

  const { type } = field

  switch (type) {
    case 'text':
      return <Text {...field} />
    case 'password':
      return <Password {...field} />
    default:
      return null
  }
}
