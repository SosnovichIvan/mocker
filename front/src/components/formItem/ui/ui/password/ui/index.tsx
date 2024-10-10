import { Form } from 'antd'
import { FormField } from 'components/formItem'
import { InputPassword } from 'supporting/ui/inputPassword'

export const Password = (props: FormField) => {
  const { placeholder, name, data = {}, rule } = props

  return (
    <Form.Item name={name} rules={rule}>
      <InputPassword {...{ placeholder }} />
    </Form.Item>
  )
}
