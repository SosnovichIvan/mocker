import { Form } from 'antd'
import { FormField } from 'components/formItem'
import { InputText } from 'supporting/ui/inputText'

export const Text = (props: FormField) => {
  const { placeholder, name, data = {}, rule } = props

  return (
    <Form.Item name={name} rules={rule}>
      <InputText {...{ placeholder }} />
    </Form.Item>
  )
}
