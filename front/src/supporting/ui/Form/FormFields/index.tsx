import { FieldPassword, FieldText } from 'supporting/ui/InputField'

import { FieldData } from './index.types'

export const FormField = (props: FieldData) => {
  const { type } = props
  switch (type) {
    case 'text':
      return <FieldText {...props} />
    case 'email':
      return <FieldText {...props} />
    case 'password':
      return <FieldPassword {...props} />
    default:
      return null
  }
}
