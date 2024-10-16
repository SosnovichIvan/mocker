import { Form } from 'antd'
import { FormField } from 'components/formItem'
import { InputPassword } from 'supporting/ui/inputPassword'

export const Password = (props: FormField) => {
  const { placeholder, name, data = {}, rules } = props

  return (
    <Form.Item {...{ rules, name }}>
      <InputPassword {...{ placeholder }} />
    </Form.Item>
  )
}
