import { Password } from './ui/password'
import { Text } from './ui/text'

import { FormFieldSprops } from './index.types'

export const FormItemField = (props: FormFieldSprops) => {
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
